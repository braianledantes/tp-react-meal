import useMeals from "../../hooks/useMeals";
import MealCard from "../../components/MealCard/MealCard";
import useFavorites from "../../hooks/useFavorites";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar";

export default function Home() {
    const { meals, loading, error } = useMeals();
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
            {loading &&
                <div className='flex justify-center items-center h-full'>
                    <CircleProgressBar />
                </div>}
            {error && <h1>{error.message}</h1>}
            {meals && (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] bg-red-50  gap-3 justify-center p-4 max-w-[1000px] mx-auto">
                    {meals.map((meal) => (
                        <MealCard key={meal.idMeal} id={meal.idMeal} image={meal.strMealThumb} title={meal.strMeal} isFav={isFavorite(meal.idMeal)} onClickFavorites={handleClickFavorites} />
                    ))}
                </div>
            )}
        </>
    )
}