import { useEffect, useState } from "react";
import { getDessertMeals } from '../api/mealApi';

const useMeals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDesserts = async () => {
          setLoading(true);
          try {
            const data = await getDessertMeals();
            setMeals(data);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };

        fetchDesserts();
    }, []);

    return { meals, loading, error }
}

export default useMeals