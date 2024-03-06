// src/recipes/recipes.service.ts
import { Body, Injectable, Param, Post } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private readonly prisma: PrismaService) {}
    async create(createRecipeDto: CreateRecipeDto) {
      
      const newRecipe = await this.prisma.recipe.create({
        data: createRecipeDto,
      });
      return newRecipe;
    }
    

  async findAll() {
    return this.prisma.recipe.findMany();
}

  
findOne(id: string) {
  return this.prisma.recipe.findUnique({
    where: { id },
  });
}

async update(id: string, updateRecipeDto: UpdateRecipeDto) {
  // Retrieve the existing recipe
  const existingRecipe = await this.prisma.recipe.findUnique({
    where: { id },
  });

  // If recipe not found, handle the error or return null, depending on your requirement
  if (!existingRecipe) {
    throw new Error('Recipe not found');
    // or return null;
  }

  // Merge the existing recipe with the new data
  const updatedRecipe = {
    ...existingRecipe,
    ...updateRecipeDto,
  };

  // Update the recipe with the merged data
  return this.prisma.recipe.update({
    where: { id },
    data: updatedRecipe,
  });
}


async remove(id: string) {
  return await this.prisma.recipe.delete({
    where: { id },
  });
}
}
 