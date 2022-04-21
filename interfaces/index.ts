export interface Category {
    strMeal: string,
    strMealThumb: string,
    idMeal: string
}

export interface CategoryResult {
    meals: Meal[];
}

export interface Meal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface RecipeInformation {
    id: string,
    name: string,
    category: string,
    instructions: string,
    image: string,
    tags: string[],
    video: string
    ingredients: {
        label: string,
        measure: string
    }[],
    source: string
}
export interface CategoriesList {
    meals: CategoryLabel[];
}

export interface CategoryLabel {
    strCategory: string;
}
