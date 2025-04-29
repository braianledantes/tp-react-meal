import { useParams } from 'react-router'
import useMeal from '../../hooks/useMeal'
import useFavorites from '../../hooks/useFavorites';
import CircleProgressBar from '../../components/CircleProgressBar/CircleProgressBar';

export default function Details() {
    const { id } = useParams()
    const { meal, loading, error } = useMeal({ id })
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleFavoriteClick = () => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id); 
        }
    };

    return (
        <>
            {loading &&
                <div className='flex justify-center items-center h-full'>
                    <CircleProgressBar />
                </div>}
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

                    <button
                        onClick={handleFavoriteClick}
                        className={`favorite-btn ${isFavorite(id) ? 'is-favorite' : ''}`}
                    >
                        {isFavorite(id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                    </button>
                </div>
            )}
        </>
    )
}