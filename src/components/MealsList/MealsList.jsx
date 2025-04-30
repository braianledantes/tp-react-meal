import MealCard from "../MealCard/MealCard";

export default function MealsList({meals, onChangeFavorites}) {

    return (
        <>
            <div
                className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 justify-center p-4 max-w-[1000px] mx-auto">
                {meals.map((meal) => (
                    <MealCard
                        key={meal.idMeal}
                        id={meal.idMeal}
                        image={meal.strMealThumb}
                        title={meal.strMeal}
                        isFav={meal.isFavorite}
                        onClickFavorites={onChangeFavorites}
                    />
                ))}
            </div>
        </>
    );
}