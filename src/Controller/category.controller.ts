import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Auth/jwt-auth.guard';
import { CreateCategoryDTO } from 'src/DTO/createCategory.dto';
import { UpdateCategoryDTO } from 'src/DTO/updateCategory.dto';
import { CategoryService } from 'src/Services/category.service';

@Controller('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createCategory(@Body() category: CreateCategoryDTO): any {
    return this.categoryService.createCategory(category);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param() id: number): any {
    return this.categoryService.findOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('update/:id')
  update(@Body() category: UpdateCategoryDTO, @Param() id: number): any {
    return this.categoryService.update(category, id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('delete/:id')
  delete(@Param() id: number): any {
    return this.categoryService.delete(id);
  }
}
