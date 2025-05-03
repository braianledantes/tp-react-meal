import MealCard from "../MealCard/MealCard";

export default function MealsList({meals, onChangeFavorites}) {

    return (
        <>
            <div
                className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 justify-center p-4 max-w-[1000px] mx-auto">
                {meals.map((meal) => (
                    <MealCard
                        key={meal.id}
                        id={meal.id}
                        image={meal.image}
                        title={meal.name}
                        isFav={meal.isFavorite}
                        onClickFavorites={onChangeFavorites}
                    />
                ))}
            </div>
        </>
    );
}