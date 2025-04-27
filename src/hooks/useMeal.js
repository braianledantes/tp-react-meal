import { useEffect, useState } from "react"

const useMeal = ({ id }) => {
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchMeal = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

            const data = await response.json()
            setMeal(data.meals[0])

            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMeal()
    }, [])

    return { meal, loading, error }
}

export default useMeal