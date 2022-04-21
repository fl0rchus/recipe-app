import { recipeAPI } from "./api";
import { Meal } from "@interfaces";

export const getResults = async (query: string) => {
    try {
        const { data } = await recipeAPI.get(`search.php?s=${query}`);

        const resultsArr = data.meals.map((item: Meal) => {
            return {
                idMeal: item.idMeal,
                strMeal: item.strMeal,
                strMealThumb: item.strMealThumb,
            };
        });

        return resultsArr;
    } catch (error) {
        return null;
    }
};
