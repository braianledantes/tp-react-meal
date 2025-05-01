import useMeals from "../../hooks/useMeals";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar";
import MealsList from "../../components/MealsList/MealsList";
import Search from "../../components/Search/Search"
import {useEffect, useState} from "react";
import useFavorites from "../../hooks/useFavorites.js";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { favorites, removeFavorite, addFavorite, isFavorite } = useFavorites();
  const [mealsToShow, setMealsToShow] = useState([]);

  const handleClickFavorites = (id) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }
  const { meals, loading, error } = useMeals();

  useEffect(() => {
    const filteredMeals = meals.filter((meal) => {
      return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const mealsWithFavorites = filteredMeals.map((meal) => {
        return {
            ...meal,
            isFavorite: isFavorite(meal.idMeal),
        }
    })
    setMealsToShow(mealsWithFavorites);
  }, [meals, searchTerm, favorites]);

  return (
    <section>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      {loading && <div className="flex justify-center mt-16"> <CircleProgressBar /> </div>}
      {error && <p className="flex justify-center mt-8 text-red-500">{error.message}</p>}
      {mealsToShow && <MealsList meals={mealsToShow} onChangeFavorites={handleClickFavorites} />}
    </section>
  )
}