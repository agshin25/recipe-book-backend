import { Injectable, NotFoundException } from "@nestjs/common";
import { RecipeFilterDto } from "./dto/filter-recipe.dto";
import { HttpService } from "src/shared/services/http.service";
import { ApiResponse, Recipe } from "./interfaces/recipe.interface";

@Injectable()
export class RecipesService {
    constructor(private httpService: HttpService){}

    async getRecipes(filters: RecipeFilterDto){
        let endpoint = ''
        
        if (filters.s !== undefined) {
            endpoint = `search.php?s=${filters.s || ''}`;
        } else if (filters.i) {
            endpoint = `filter.php?i=${filters.i}`;
        } else if (filters.a) {
            endpoint = `filter.php?a=${filters.a}`;
        } else if (filters.c) {
            endpoint = `filter.php?c=${filters.c}`;
        } else {
            endpoint = 'search.php?s=';
        }

        const response = await this.httpService.get<ApiResponse<Recipe>>(endpoint)
        if (!response.meals) {
            console.warn("No recipes found for filters:", filters);
            return []
        }
        
        return response.meals
    }

    async getRecipeById(id: string){
        const endpoint = `lookup.php?i=${id}`;
        const response = await this.httpService.get<ApiResponse<Recipe>>(endpoint);

        if (!response.meals || response.meals.length === 0) {
            throw new NotFoundException(`Recipe with ID ${id} not found`);
        }        
        const recipe = response.meals[0];
        console.log('asd');
        

        return recipe
    }

    async getCategories() {
        const endpoint = `/list.php?c=list`;
        const response = await this.httpService.get<{ categories: {meals: any[]} }>(endpoint);

        if (!response) {
            throw new NotFoundException("No categories found");
        }
        return response;
    }
    async getAreas(){
        const endpoint = `/list.php?a=list`;
        const response = await this.httpService.get<{ categories: { meals: any[] } }>(endpoint);

        if (!response) {
            throw new NotFoundException("No categories found");
        }
        return response;
    }

    async getIngredients() {
        const endpoint = `/list.php?i=list`;
        const response = await this.httpService.get<{ categories: { meals: any[] } }>(endpoint);

        if (!response) {
            throw new NotFoundException("No categories found");
        }
        return response;
    }

}