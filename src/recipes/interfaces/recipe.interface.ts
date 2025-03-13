export interface Recipe {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
    strInstructions?: string;
    strTags?: string;
    strYoutube?: string;
}

// export interface RecipeDetail extends Recipe {
//     strInstructions: string;
//     ingredients: {
//         ingredient: string;
//         measure: string;
//     }[];
// }

export interface ApiResponse<T> {
    meals: T[] | null;
}