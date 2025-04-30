import React, {useEffect, useState} from 'react';
import useFavorites from '../../hooks/useFavorites';
import {getMealById} from '../../api/mealApi';
import Search from "../../components/Search/Search";
import MealsList from "../../components/MealsList/MealsList.jsx";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar.jsx";
import {useTranslation} from "react-i18next";


export default function FavoritesPage() {
    const {t} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");
    const {favorites, loading, removeFavorite, addFavorite, isFavorite} = useFavorites();
    const [meals, setMeals] = useState([]);

    const handleClickFavorites = (id) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    }

    useEffect(() => {
        const fetchMeals = async () => {
            const mealsData = await Promise.all(favorites.map(id => getMealById(id)));
            const mealsWithFavorites = mealsData.map((meal) => {
                return {
                    ...meal,
                    isFavorite: isFavorite(meal.idMeal),
                }
            })
            setMeals(mealsWithFavorites);
        }
        fetchMeals();
    }, [favorites, searchTerm])

    return (
        <section className="-mt-16 p-20">
            <h2 className="text-4xl text-center mt-4 font-semibold">{t("favorites-title")}</h2>
            <Search searchTerm={searchTerm} onSearch={setSearchTerm}/>
            {loading && <div className="flex justify-center items-center mt-16"><CircleProgressBar/></div>}
            {meals && <MealsList meals={meals} onChangeFavorites={handleClickFavorites}/>}
        </section>
    );
}