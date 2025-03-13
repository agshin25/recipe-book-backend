import { Module } from "@nestjs/common";
import { RecipesController } from "./recipes.controller";
import { RecipesService } from "./recipes.service";
import { HttpService } from "src/shared/services/http.service";

@Module({
    imports: [],
    controllers: [RecipesController],
    providers: [RecipesService, HttpService]
})

export class RecipesModule {}