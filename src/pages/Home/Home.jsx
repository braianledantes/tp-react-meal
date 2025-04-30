import useMeals from "../../hooks/useMeals";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar";
import { useSearch } from "../../context/SearchContext";
import MealsList from "../../components/MealsList/MealsList";

export default function Home() {
  const { searchTerm } = useSearch();
  const { meals, loading, error } = useMeals();

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {loading && <div className="flex justify-center items-center h-full"> <CircleProgressBar /> </div>}
      {error && <p>{error.message}</p>}
      {filteredMeals && <MealsList meals={filteredMeals} />}
    </div>
  )
}