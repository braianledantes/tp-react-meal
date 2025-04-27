import { useParams } from 'react-router'
import useMeal from '../../hooks/useMeal'

export default function Details() {
    const { id } = useParams()
    const { meal, loading, error } = useMeal({ id })

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error.message}</h1>}
            {meal && (
                <div>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h2>{meal.strMeal}</h2>
                    <p>{meal.strInstructions}</p>
                    <ul>
                        {meal.strIngredient1 && <li>{meal.strIngredient1}</li>}
                        {meal.strIngredient2 && <li>{meal.strIngredient2}</li>}
                        {meal.strIngredient3 && <li>{meal.strIngredient3}</li>}
                        {meal.strIngredient4 && <li>{meal.strIngredient4}</li>}
                        {meal.strIngredient5 && <li>{meal.strIngredient5}</li>}
                    </ul>
                </div>
            )}
        </>
    )
}