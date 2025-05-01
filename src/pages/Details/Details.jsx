import { useParams } from 'react-router';
import useMeal from '../../hooks/useMeal';
import useFavorites from '../../hooks/useFavorites';
import CircleProgressBar from '../../components/CircleProgressBar/CircleProgressBar';
import { useTranslation } from 'react-i18next';
import MealDetail from '../../components/MealDetail/MealDetail';
import { useNavigate } from 'react-router-dom';

export default function Details() {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const { meal, loading, error } = useMeal({ id });
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleFavoriteClick = () => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    };

    if (!loading && error && error.message === 'Meal not found') {
        console.log("Redirigiendo a /error");
        navigate(PATHS.ERROR); 
        return null;
    }

    return (
        <section>
            {loading && (
                <div className="flex justify-center items-center h-full mt-16">
                    <CircleProgressBar />
                </div>
            )}
            {error && error.message !== 'Meal not found' && (
                <h1 className="text-center text-red-500">{error.message}</h1>
            )}
            {meal && (
                <MealDetail
                    meal={meal}
                    isFav={isFavorite(id)}
                    onFavoriteClick={handleFavoriteClick}
                />
            )}
        </section>
    );
}