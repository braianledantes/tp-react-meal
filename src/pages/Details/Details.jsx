import { useParams } from 'react-router'
import useMeal from '../../hooks/useMeal'
import useFavorites from '../../hooks/useFavorites';
import CircleProgressBar from '../../components/CircleProgressBar/CircleProgressBar';
import FavButton from '../../components/FavButton/FavButton';
import { useTranslation } from 'react-i18next';

export default function Details() {
    const { t } = useTranslation()
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
                <div className='grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4 p-4 mx-auto max-w-6xl'>
                    <div className='flex flex-col gap-4'>
                        <iframe className='w-full aspect-video' src={getEmbedYoutubeVideo()} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <h2 className='text-2xl font-semibold text-black '>{meal.strMeal}</h2>
                        <FavButton isFav={isFavorite(id)} onClick={handleFavoriteClick} />
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <div>
                            <h3 className='text-lg mb-1.5'>{t("instructions-title")}</h3>
                            <p>{meal.strInstructions}</p>
                        </div>
                        <div>
                            <h3 className="text-lg mb-1.5">{t("ingredients-title")}</h3>
                            <ul className="list-disc list-inside">
                                {meal.strIngredient1 && <li>{meal.strIngredient1}</li>}
                                {meal.strIngredient2 && <li>{meal.strIngredient2}</li>}
                                {meal.strIngredient3 && <li>{meal.strIngredient3}</li>}
                                {meal.strIngredient4 && <li>{meal.strIngredient4}</li>}
                                {meal.strIngredient5 && <li>{meal.strIngredient5}</li>}
                                {meal.strIngredient6 && <li>{meal.strIngredient6}</li>}
                                {meal.strIngredient7 && <li>{meal.strIngredient7}</li>}
                                {meal.strIngredient8 && <li>{meal.strIngredient8}</li>}
                                {meal.strIngredient9 && <li>{meal.strIngredient9}</li>}
                                {meal.strIngredient10 && <li>{meal.strIngredient10}</li>}
                                {meal.strIngredient11 && <li>{meal.strIngredient11}</li>}
                                {meal.strIngredient12 && <li>{meal.strIngredient12}</li>}
                                {meal.strIngredient13 && <li>{meal.strIngredient13}</li>}
                                {meal.strIngredient14 && <li>{meal.strIngredient14}</li>}
                                {meal.strIngredient15 && <li>{meal.strIngredient15}</li>}
                                {meal.strIngredient16 && <li>{meal.strIngredient16}</li>}
                                {meal.strIngredient17 && <li>{meal.strIngredient17}</li>}
                                {meal.strIngredient18 && <li>{meal.strIngredient18}</li>}
                                {meal.strIngredient19 && <li>{meal.strIngredient19}</li>}
                                {meal.strIngredient20 && <li>{meal.strIngredient20}</li>}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg mb-1.5'>{t("measures-title")}</h3>
                            <ul className="list-disc list-inside">
                                {meal.strMeasure1 && <li>{meal.strMeasure1}</li>}
                                {meal.strMeasure2 && <li>{meal.strMeasure2}</li>}
                                {meal.strMeasure3 && <li>{meal.strMeasure3}</li>}
                                {meal.strMeasure4 && <li>{meal.strMeasure4}</li>}
                                {meal.strMeasure5 && <li>{meal.strMeasure5}</li>}
                                {meal.strMeasure6 && <li>{meal.strMeasure6}</li>}
                                {meal.strMeasure7 && <li>{meal.strMeasure7}</li>}
                                {meal.strMeasure8 && <li>{meal.strMeasure8}</li>}
                                {meal.strMeasure9 && <li>{meal.strMeasure9}</li>}
                                {meal.strMeasure10 && <li>{meal.strMeasure10}</li>}
                                {meal.strMeasure11 && <li>{meal.strMeasure11}</li>}
                                {meal.strMeasure12 && <li>{meal.strMeasure12}</li>}
                                {meal.strMeasure13 && <li>{meal.strMeasure13}</li>}
                                {meal.strMeasure14 && <li>{meal.strMeasure14}</li>}
                                {meal.strMeasure15 && <li>{meal.strMeasure15}</li>}
                                {meal.strMeasure16 && <li>{meal.strMeasure16}</li>}
                                {meal.strMeasure17 && <li>{meal.strMeasure17}</li>}
                                {meal.strMeasure18 && <li>{meal.strMeasure18}</li>}
                                {meal.strMeasure19 && <li>{meal.strMeasure19}</li>}
                                {meal.strMeasure20 && <li>{meal.strMeasure20}</li>}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}