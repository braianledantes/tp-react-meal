import React, {useEffect, useState} from 'react';
import useFavorites from '../../hooks/useFavorites';
import Search from "../../components/Search/Search";
import MealsList from "../../components/MealsList/MealsList.jsx";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar.jsx";
import {useTranslation} from "react-i18next";
import useMeals from "../../hooks/useMeals.js";


export default function FavoritesPage() {
    const {t} = useTranslation();
    const { meals, loading, error} = useMeals();
    const {favorites, removeFavorite, addFavorite, isFavorite} = useFavorites();
    const [searchTerm, setSearchTerm] = useState("");
    const [mealsToShow, setMealsToShow] = useState([]);

    const handleClickFavorites = (id) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    }

    useEffect(() => {
        const res = meals.filter(m => favorites.includes(m.id))
            .map(m => ({
                ...m,
                isFavorite: true,
            }))
            .filter(meal => meal.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setMealsToShow(res);
    }, [meals, favorites, searchTerm])


    return (
        <section>
            <h2 className="text-4xl text-center mt-4 font-semibold">{t("favorites-title")}</h2>
            <Search searchTerm={searchTerm} onSearch={setSearchTerm}
                    noResults={mealsToShow.length === 0 && !loading}/>
            {loading && <div className="flex justify-center items-center mt-16"><CircleProgressBar/></div>}
            {!loading && mealsToShow.length === 0 && (
                <p className="text-center text-cocoa ml-2">{t("no-results")}</p>
            )}
            {mealsToShow.length > 0 && (
                <MealsList meals={mealsToShow} onChangeFavorites={handleClickFavorites}/>
            )}
        </section>
    );
}