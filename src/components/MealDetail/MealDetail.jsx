import FavButton from '../FavButton/FavButton';
import {useTranslation} from 'react-i18next';
import MealDetailPDF from '../../pdf/MealPDF';
import {PDFDownloadLink} from "@react-pdf/renderer";

export default function MealDetail({ meal, isFav, onFavoriteClick }) {
    const { t } = useTranslation();

    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-4 p-6 mx-auto max-w-6xl'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-cocoa font-nunito text-2xl font-bold italic'>{meal.name} ! </h2>
                <iframe
                    className='w-full aspect-video'
                    src={meal.youtube}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>

                <div className='flex justify-between items-center p-5 gap-4'>
                    <PDFDownloadLink
                        document={<MealDetailPDF meal={meal} t={t} />}
                        fileName={`${meal.name} - recipe.pdf`}>
                        {({ loading }) => (
                            <button className="px-8 py-2 bg-transparent border-2 border-softAlmond  text-black rounded-full hover:bg-softAlmond hover:border-softAlmond hover:text-white transition-all cursor-pointer shadow-sm">
                        {loading ? t("generating-pdf") : t("download-pdf")}
                             </button>
                        )}
                    </PDFDownloadLink>

                    <FavButton isFav={isFav} onClick={onFavoriteClick} />
                </div>
                <hr className="text-softAlmond"></hr>
            </div>

            <div className='flex flex-wrap gap-4 pl-3'>
                <div>
                    <h3 className='text-goldenSugar font-nunito font-bold text-lg mb-1.5 italic'>{t("instructions-title")}</h3>
                    <p>{meal.instructions}</p>
                </div>
                <div>
                    <h3 className='text-softAlmond font-nunito font-bold text-lg mb-1.5 italic'>{t("measures-title")}</h3>
                    {meal.measures.map((measure, index) => (
                        <div key={index} className="font-semibold  text-right">{measure}</div>
                    ))}
                </div>
                <div>
                    <h3 className="text-softAlmond font-nunito font-bold  text-lg mb-1.5 italic">{t("ingredients-title")}</h3>
                    {meal.ingredients.map((ingredient, index) => (
                        <div key={index}>{ingredient}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}