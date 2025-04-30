import {useEffect, useState} from 'react';

const useFavorites = () => {
    const localStorageKey = 'favoriteMeals';
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        try {
            const storedFavorites = JSON.parse(localStorage.getItem(localStorageKey)) || [];
            setFavorites(storedFavorites);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [])

    const addFavorite = (mealId) => {
        if (!favorites.includes(mealId)) {
            const updatedFavorites = [...favorites, mealId];
            setFavorites(updatedFavorites);
            localStorage.setItem(localStorageKey, JSON.stringify(updatedFavorites));
        }
    }

    const removeFavorite = (mealId) => {
        const updatedFavorites = favorites.filter((id) => id !== mealId);
        setFavorites(updatedFavorites);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedFavorites));
    }

    const isFavorite = (mealId) => favorites.includes(mealId);

    return {favorites, loading, error, addFavorite, removeFavorite, isFavorite};
};

export default useFavorites;