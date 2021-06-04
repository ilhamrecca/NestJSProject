import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDTO } from 'src/DTO/createCategory.dto';
import { UpdateCategoryDTO } from 'src/DTO/updateCategory.dto';
import { CategoryEntity } from 'src/entity/category.entity';
import { Repository } from 'typeorm';

export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(category: CreateCategoryDTO): Promise<Object> {
    const newCategory = await this.categoryRepository.create(category);
    return this.categoryRepository.save(newCategory);
  }

  async findOneById(id: number): Promise<CreateCategoryDTO> {
    try {
      const category = await this.categoryRepository.findOneOrFail(id);
      return category;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async update(newData: UpdateCategoryDTO, id): Promise<UpdateCategoryDTO> {
    const category = await this.findOneById(id);
    category.nama = newData.nama;
    category.deskripsi = newData.deskripsi;
    return this.categoryRepository.save(category);
  }

  async delete(id: number): Promise<CategoryEntity> {
    const category = <CategoryEntity>await this.findOneById(id);

    return this.categoryRepository.remove(category);
  }
}
