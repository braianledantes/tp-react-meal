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
    const [isLoading, setIsLoading] = useState(true);

    const handleClickFavorites = (id) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    }

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            const mealsData = await Promise.all(favorites.map(id => getMealById(id)));
            const mealsWithFavorites = mealsData.map((meal) => {
                return {
                    ...meal,
                    isFavorite: isFavorite(meal.idMeal),
                }
            })
            setMeals(mealsWithFavorites);
            setIsLoading(false);
        }
        fetchMeals();
    }, [favorites])

    const filteredMeals = meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section>
            <h2 className="text-4xl text-center mt-4 font-semibold">{t("favorites-title")}</h2>
            <Search searchTerm={searchTerm} onSearch={setSearchTerm} noResults={filteredMeals.length === 0 && !isLoading} />
            {isLoading && <div className="flex justify-center items-center mt-16"><CircleProgressBar /></div>}
            {!isLoading && filteredMeals.length === 0 && (
                <p className="text-center text-cocoa ml-2">{t("no-results")}</p>
            )}
            {filteredMeals.length > 0 && (
                <MealsList meals={filteredMeals} onChangeFavorites={handleClickFavorites} />
            )}
        </section>
    );
}