import { CategoriesList, CategoryLabel } from "@interfaces";
import { recipeAPI } from "@utils/api"

export const getCategoriesList = async () => {
    try {
        const { data } = await recipeAPI.get<CategoriesList>("list.php?c=list");
        const categories: CategoryLabel[] = data.meals.map((item) => item);
        return categories
    } catch (error) {
        return null
    }
}