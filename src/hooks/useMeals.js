import { useEffect, useState } from "react";
import { searchMealsByName } from "../api/mealApi";

const useMeals = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchMeal = async () => {
        try {
            const data = await searchMealsByName("");
            setMeals(data)

            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMeal()
    }, [])

    return { meals, loading, error }
}

export default useMeals