import { useEffect, useState } from "react"

const useMeals = () => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchMeal = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)

            const data = await response.json()
            setMeals(data.meals)

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