import useMeals from "../../hooks/useMeals";
import { Link } from "react-router";

export default function Home() {
    const { meals, loading, error } = useMeals()

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {meals && (
                <div className="grid grid-cols-3 gap-4 p-4">
                    {meals.map((meal) => (
                        <div key={meal.idMeal} className="bg-white shadow-md rounded-lg p-4">
                            <Link to={`/details/${meal.idMeal}`}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover rounded-t-lg" />
                                <h2 className="text-xl font-bold mt-2">{meal.strMeal}</h2>
                            </Link>
                            <p className="text-gray-600">{meal.strCategory}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}