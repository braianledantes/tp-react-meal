import { useEffect, useState } from "react";
import { getMealById } from "../api/mealApi";

const useMeal = ({ id }) => {
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchMeal = async () => {
        try {
            const data= await getMealById(id);
            setMeal(data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMeal()
    }, [id])

    return { meal, loading, error }
}

export default useMeal