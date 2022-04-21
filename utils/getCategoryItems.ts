import { CategoryResult } from "@interfaces";
import { recipeAPI } from "./api";

export const getCategoryItems = async (category: string) => {
    try {
        const { data } = await recipeAPI.get<CategoryResult>(
            `filter.php?c=${category}`
        );
        return data.meals
    } catch (error) {
        return null
    }
}