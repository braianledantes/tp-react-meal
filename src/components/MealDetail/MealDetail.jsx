import FavButton from '../FavButton/FavButton';
import { useTranslation } from 'react-i18next';

export default function MealDetail({ meal, isFav, onFavoriteClick }) {
    const { t } = useTranslation();

    const getEmbedYoutubeVideo = () => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = meal?.strYoutube?.match(regex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : null;
    };
  
    const renderList = (base, count = 20) =>
        Array.from({ length: count }, (_, i) => base + (i + 1))
          .map(key => meal?.[key]?.trim())
          .filter(item => item && item !== "");
    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4 p-6 mx-auto max-w-6xl'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-cocoa font-nunito text-2xl font-bold italic'>{meal.strMeal} ! </h2>
                <iframe
                    className='w-full aspect-video'
                    src={getEmbedYoutubeVideo()}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className='flex justify-between items-center p-5 gap-4'>
                    <h1>Descargar PDF de instrucciones!</h1>
                    <FavButton isFav={isFav} onClick={onFavoriteClick} />
                </div>
                <hr className="text-softAlmond"></hr>
            </div>

            <div className='flex flex-wrap gap-4 pl-3'>
                <div>
                    <h3 className='text-goldenSugar font-nunito font-bold text-lg mb-1.5 italic'>{t("instructions-title")}</h3>
                    <p>{meal.strInstructions}</p>
                </div>
                <div>
                    <h3 className='text-softAlmond font-nunito font-bold text-lg mb-1.5 italic'>{t("measures-title")}</h3>
                    {renderList("strMeasure").map((measure, index) => (
                        <div key={index} className="font-semibold  text-right">{measure}</div>
                    ))}
                </div>
                <div>
                    <h3 className="text-softAlmond font-nunito font-bold  text-lg mb-1.5 italic">{t("ingredients-title")}</h3>
                    {renderList("strIngredient").map((ingredient, index) => (
                        <div key={index}>{ingredient}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
