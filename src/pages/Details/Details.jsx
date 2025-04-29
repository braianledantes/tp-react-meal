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

    const getEmbedYoutubeVideo = () => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = meal.strYoutube.match(regex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    }

    return (
        <>
            {loading &&
                <div className='flex justify-center items-center h-full'>
                    <CircleProgressBar />
                </div>}
            {error && <h1>{error.message}</h1>}
            {meal && (
                <div>
                    <iframe width="560" height="315" src={getEmbedYoutubeVideo()} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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