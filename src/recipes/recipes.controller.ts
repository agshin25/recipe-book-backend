import { Controller, Get, Param, Query } from "@nestjs/common";
import { RecipesService } from "./recipes.service";
import { RecipeFilterDto } from "./dto/filter-recipe.dto";

@Controller('recipes')
export class RecipesController {
    constructor(private recipesService: RecipesService){}

    @Get()
    async getRecipes(@Query() filters: RecipeFilterDto){
        return this.recipesService.getRecipes(filters)
    }

    @Get('item/:id')
    getRecipeByID(@Param('id') id: string){
        return this.recipesService.getRecipeById(id)
    }

    @Get('categories')
    getCategories(){
        return this.recipesService.getCategories()
    }
    @Get('areas')
    getAreas() {
        return this.recipesService.getAreas()
    }

    @Get('ingredients')
    getIngredients() {
        return this.recipesService.getIngredients()
    }
}
