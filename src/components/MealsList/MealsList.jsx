import useFavorites from "../../hooks/useFavorites";
import MealCard from "../MealCard/MealCard";

export default function MealsList({ meals }) {
    const { isFavorite, removeFavorite, addFavorite } = useFavorites();

    const handleClickFavorites = (id) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    }

    return (
        <>
            {meals.length === 0 && <p className="text-center text-gray-600"> No se encontraron resultados. </p>}
            {meals.length > 0 &&
                <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 justify-center p-4 max-w-[1000px] mx-auto">
                    {meals.map((meal) => (
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
            }</>
    );
}