import { recipeAPI } from "./api"
import { RecipeInformation } from "@interfaces"

export const getRecipeInfo = async (id: string) => {
    try {
        const { data } = await recipeAPI.get(`lookup.php?i=${id}`);
        // @ts-ignore
        const ingredientsArr = () => {
            let ingredients = [];
            for (let i = 1; i <= 20; i++) {
                ingredients.push({
                    label: data?.meals[0][`strIngredient${i + 1}`],
                    measure: data?.meals[0][`strMeasure${i + 1}`],
                });
            }
            return ingredients;
        };

        const info: RecipeInformation = {
            id: data?.meals[0].idMeal,
            name: data?.meals[0].strMeal,
            category: data?.meals[0].strCategory,
            instructions: data?.meals[0].strInstructions,
            image: data?.meals[0].strMealThumb,
            tags: data?.meals[0].strTags,
            video: data?.meals[0].strYoutube,
            ingredients: ingredientsArr(),
            source: data?.meals[0].strSource,
        };

        return info
    } catch (error) {
        return null
    }
}