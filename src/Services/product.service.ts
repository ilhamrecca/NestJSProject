import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDTO as CreateProductDTO } from 'src/DTO/createProduct.dto';
import { UpdateProductDTO } from 'src/DTO/updateProduct.dto';

import { ProductEntity } from 'src/entity/product.entity';
import { Repository } from 'typeorm';

export class ProdukService {
  constructor(
    @InjectRepository(ProductEntity)
    private produkRepository: Repository<ProductEntity>,
  ) {}

  async createProduk(category: CreateProductDTO): Promise<Object> {
    const newCategory = await this.produkRepository.create(category);
    return this.produkRepository.save(newCategory);
  }

  async findOneById(id: number): Promise<ProductEntity> {
    try {
      const category = await this.produkRepository.findOneOrFail(id);
      return category;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async findProdukInCategory(id: number): Promise<ProductEntity[]> {
    try {
      const category = await this.produkRepository.find({ kategori: id });
      return category;
    } catch (err) {
      throw new NotFoundException();
    }
  }

  async update(newData: UpdateProductDTO, id): Promise<ProductEntity> {
    const product = await this.findOneById(id);
    product.nama = newData.nama;
    product.deskripsi = newData.deskripsi;
    product.gambar = newData.gambar;
    product.kategori = newData.kategori;
    product.stok = newData.stok;
    return this.produkRepository.save(product);
  }

  async delete(id: number): Promise<ProductEntity> {
    const product = <ProductEntity>await this.findOneById(id);

    return this.produkRepository.remove(product);
  }
}
