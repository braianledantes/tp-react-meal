const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * Obtener detalle de una comida por ID
 * @param {string} id
 */
export async function getMealById(id) {
    try {
        const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals?.[0] || null;
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
    return data.meals || [];
}