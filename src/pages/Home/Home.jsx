import useMeals from "../../hooks/useMeals";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar";
import MealsList from "../../components/MealsList/MealsList";
import Search from "../../components/Search/Search"
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { meals, loading, error } = useMeals();

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      {loading && <div className="flex justify-center items-center h-full"> <CircleProgressBar /> </div>}
      {error && <p>{error.message}</p>}
      {filteredMeals && <MealsList meals={filteredMeals} />}
    </section>
  )
}