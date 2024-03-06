import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RecipesService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipesService) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @Get()
async findAll() {
  return await this.recipeService.findAll();
}

@Get(':id')
async findOne(@Param('id') id: string) {
  return await this.recipeService.findOne(id);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
  return this.recipeService.update(id, updateRecipeDto);
}

@Delete(':id')
async remove(@Param('id', ParseIntPipe) id: string) {
  return await this.recipeService.remove(id);
}
}
