import { NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProdukDTO } from "src/DTO/createProduk.dto";
import { UpdateProdukDTO } from "src/DTO/updateProduk.dto";

import { ProductEntity } from "src/entity/product.entity";
import { Repository } from "typeorm";

export class ProdukService{
    constructor(@InjectRepository(ProductEntity) private produkRepository: Repository<ProductEntity>) { }
    
    async createProduk(category: CreateProdukDTO): Promise<Object>{
        const newCategory = await this.produkRepository.create(category);
        return this.produkRepository.save(newCategory)
    }

    async findOneById(id: number): Promise<ProductEntity>{
        try {
            const category = await this.produkRepository.findOneOrFail(id)
            return category
        } catch (err) {
            throw new NotFoundException()
        }
    }

    async findProdukInCategory(id: number): Promise<ProductEntity[]>{
        try {
            const category = await this.produkRepository.find({kategori: id})
            return category
        } catch (err) {
            throw new NotFoundException()
        }
    }

    async update(newData: UpdateProdukDTO, id): Promise<ProductEntity> {
        const product = await this.findOneById(id);
        product.nama = newData.nama
        product.deskripsi = newData.deskripsi
        product.gambar = newData.gambar
        product.kategori = newData.kategori
        product.stok = newData.stok
        return this.produkRepository.save(product)
    }

    async delete(id: number): Promise<ProductEntity> {
        const product = <ProductEntity>await this.findOneById(id);
        
        return this.produkRepository.remove(product)

    }
}