import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useFavorites from '../../hooks/useFavorites';
import { getMealById } from '../../api/mealApi';
import PATHS from '../../routes/paths';
import Search from "../../components/Search/Search";


export default function FavoritesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const { favorites, removeFavorite } = useFavorites();
    const [meals, setMeals] = useState([]);

    const filteredMeals = meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    useEffect(() => {
        const fetchMeals = async () => {
          try {
            const mealDetails = await Promise.all(
              favorites.map(async (mealId) => {
                const meal = await getMealById(mealId);
                if (meal) {
                  meal.detailUrl = PATHS.DETAILS.replace(':id', mealId);
                  return meal;
                }
                return null;
              })
            );
            setMeals(mealDetails.filter(meal => meal !== null));
          } catch (error) {
            console.error("Error fetching meals:", error);
          }
        };
      
        fetchMeals();
      }, [favorites]);
      
    if (favorites.length === 0) {
        return <h2>No tienes favoritos guardados. ¡Agrega algunos!</h2>;
    }

    return (
      <div>
          <h2>Comidas Favoritas</h2>
          <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
            {filteredMeals.length === 0 ? (
              <p>No se encontró ninguna receta guardada con ese nombre.</p>
            ) : (
          <div className="favorites-list">
              {filteredMeals.map((meal) => (
                 meal ? ( 
                  <div key={meal.idMeal} className="favorite-item">
                      <Link to={meal.detailUrl}>
                          <img src={meal.strMealThumb} alt={meal.strMeal} className="favorite-item-img" />
                          <h3>{meal.strMeal}</h3>
                      </Link>
                       <button onClick={() => removeFavorite(meal.idMeal)} className="remove-btn">
                          Eliminar de favoritos
                      </button>
                  </div>
                ) : null
              ))}
          </div>
            )}
      </div>
    );
}