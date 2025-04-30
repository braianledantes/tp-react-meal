import useMeals from "../../hooks/useMeals";
import MealCard from "../../components/MealCard/MealCard";
import useFavorites from "../../hooks/useFavorites";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar";
import { useSearch } from "../../context/SearchContext";

export default function Home() {
    const { searchTerm } = useSearch();
    const { meals, loading, error } = useMeals(); 
    const { isFavorite, removeFavorite, addFavorite } = useFavorites();

    const filteredMeals = meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
      
    const handleClickFavorites = (id) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    }

    return (
        <div>
            {loading && ( <div className="flex justify-center items-center h-full"> <CircleProgressBar /> </div> )}
            {error && <h1>{error.message}</h1>}
            {!loading && filteredMeals.length === 0 && ( <p className="text-center text-gray-600"> No se encontraron resultados. </p> )}
            {filteredMeals.length > 0 && (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 justify-center p-4 max-w-[1000px] mx-auto">
                {filteredMeals.map((meal) => (
                  <MealCard
                    key={meal.idMeal}
                    id={meal.idMeal}
                    image={meal.strMealThumb}
                    title={meal.strMeal}
                    isFav={isFavorite(meal.idMeal)}
                    onClickFavorites={handleClickFavorites}
                  />
                ))}
              </div>
            )}
        </div>
    )
}