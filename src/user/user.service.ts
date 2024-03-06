// src/recipes/recipes.service.ts
import { Body, Injectable, Param, Post } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
   
  async create(createUserDto: CreateUserDto) {
    const newuser = await this.prisma.user.create({
      data: createUserDto,
    });
    return newuser;
  }

  async findAll() {
    return this.prisma.user.findMany();
}

  
findOne(id: string) {
  return this.prisma.user.findUnique({
    where: { id },
  });
}

async update(id: string, updateUserDto: UpdateUserDto) {
  // Retrieve the existing recipe
  const existingUser = await this.prisma.user.findUnique({
    where: { id },
  });
  if (!existingUser) {
    throw new Error('User not found');
  }
  const updatedUser = {
    ...existingUser,
    ...updateUserDto,

  };
  return this.prisma.user.update({
    where: { id },
    data: updatedUser,
  });
}


async remove(id: string) {
  return await this.prisma.user.delete({
    where: { id },
  });
}
}
 