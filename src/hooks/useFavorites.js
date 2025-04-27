import { useState, useEffect } from 'react';

const useFavorites = () => {
    const localStorageKey = 'favoriteMeals';
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem(localStorageKey);
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (mealId) => {
        if (!favorites.includes(mealId)) {
            setFavorites((prevFavorites) => [...prevFavorites, mealId]);
        }
    };

    const removeFavorite = (mealId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((id) => id !== mealId));
    };

    const isFavorite = (mealId) => favorites.includes(mealId);

    return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;