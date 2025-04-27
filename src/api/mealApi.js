const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * Buscar comidas por nombre
 * @param {string} name
 */
export async function searchMealsByName(name) {
  const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
  const data = await response.json();
  return data.meals;
}

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
 * Obtener todas las categorías
 */
export async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/categories.php`);
  const data = await response.json();
  return data.categories;
}