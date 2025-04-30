import React, {useEffect, useState} from 'react';
import useFavorites from '../../hooks/useFavorites';
import {getMealById} from '../../api/mealApi';
import PATHS from '../../routes/paths';
import Search from "../../components/Search/Search";
import MealsList from "../../components/MealsList/MealsList.jsx";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar.jsx";
import {useTranslation} from "react-i18next";


export default function FavoritesPage() {
    const {t} = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");
    const {favorites, loading, error} = useFavorites();
    const [meals, setMeals] = useState([]);

    const filteredMeals = meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const mealDetails = await Promise.all(
                    favorites.map(async (mealId) => {
                        const meal = await getMealById(mealId);
                        if (meal) {
                            meal.detailUrl = PATHS.DETAILS.replace(':id', mealId);
                            return meal;
                        }
                        return null;
                    })
                );
                setMeals(mealDetails.filter(meal => meal !== null));
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
        };

        fetchMeals();
    }, [favorites]);

    return (
        <section className="bg-sweetPeach min-h-screen -mt-16 p-20">
            <h2 className="text-4xl text-center mt-4 font-semibold">{t("favorites-title")}</h2>
            <Search searchTerm={searchTerm} onSearch={setSearchTerm}/>
            {loading && <div className="flex justify-center items-center mt-16"><CircleProgressBar/></div>}
            {error && <p>{error.message}</p>}
            {filteredMeals && <MealsList meals={filteredMeals}/>}
        </section>
    );
}