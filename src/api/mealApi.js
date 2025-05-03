const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const getEmbedYoutubeVideo = (meal) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = meal?.strYoutube?.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

/**
 * Obtener detalle de una comida por ID
 * @param {string} id
 */
export async function getMealById(id) {
    try {
        const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
        const data = await response.json();
        const meal = data.meals?.[0] || null;
        if (!meal) {
            throw new Error("Meal not found");
        }
        return {
            id: meal.idMeal,
            name: meal.strMeal,
            image: meal.strMealThumb,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions,
            ingredients: Array.from({length: 20}, (_, i) => meal[`strIngredient${i + 1}`]),
            measures: Array.from({length: 20}, (_, i) => meal[`strMeasure${i + 1}`]),
            youtube: getEmbedYoutubeVideo(meal),
        };
    } catch (error) {
        console.error("Error fetching meal by ID:", error);
        return null;
    }
}

/**
 * Obtener lista de comidas de tipo Dessert
 * @returns {Promise<[]|*|*[]>}
 */
export async function getDessertMeals() {
    const response = await fetch(`${BASE_URL}/filter.php?c=Dessert`);
    const data = await response.json();
    const meals = data.meals || [];
    return meals.map((meal) => ({
        id: meal.idMeal,
        name: meal.strMeal,
        image: meal.strMealThumb,
    }))
}