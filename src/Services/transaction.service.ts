import { NotAcceptableException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { timeStamp } from "console";
import { CreateTransationDTO } from "src/DTO/createTransaction.dto";
import { UpdateProdukDTO } from "src/DTO/updateProduk.dto";

import { ProductEntity } from "src/entity/product.entity";
import { TransactionEntity } from "src/entity/transaction.entity";
import { Repository } from "typeorm";

export class TransactionService{
    constructor(
        @InjectRepository(TransactionEntity) private transactionRepository: Repository<TransactionEntity>,
        @InjectRepository(ProductEntity) private productRepository : Repository<ProductEntity>
    ) { }
    
    async checkStock(product: CreateTransationDTO): Promise<boolean>{
        for (let i = 0; i < product.transaction.length; i++){
            const stok = await this.findOneById(product.transaction[i].id)
            if (product.transaction[i].amount > stok.stok) {
                return false
            } 
        }

        return true;
    }
    
    async transactionOut(product: CreateTransationDTO): Promise<Object>{
        if (await this.checkStock(product)) {
            for (let i = 0; i < product.transaction.length; i++){
                let stok = await this.findOneById(product.transaction[i].id)
                stok.stok -= product.transaction[i].amount
                this.productRepository.save(stok)
                const transaction = this.transactionRepository.create({
                    product: product.transaction[i].id,
                    amount: product.transaction[i].amount,
                    jenisTransaksi: product.jenisTransaksi
                })
                this.transactionRepository.save(transaction);
            }
        }
        else {
            return {error: "Not Enough Stock"}
        }
        return product
    }

    async transactionIn(product: CreateTransationDTO): Promise<Object>{
            
        for (let i = 0; i < product.transaction.length; i++){
            let stok = await this.findOneById(product.transaction[i].id)
            stok.stok += product.transaction[i].amount
            this.productRepository.save(stok)
            const transaction = this.transactionRepository.create({
                product: product.transaction[i].id,
                amount: product.transaction[i].amount,
                jenisTransaksi: product.jenisTransaksi
            })
            this.transactionRepository.save(transaction);
        }
        return product
            
    }


    async createTransaction(product: CreateTransationDTO): Promise<Object>{
        if (product.jenisTransaksi === "OUT") {
            return this.transactionOut(product)
        }
        else if(product.jenisTransaksi === "IN"){
            return this.transactionIn(product)
        }
    }

    async findOneById(id: number): Promise<ProductEntity>{
        try {
            const product = await this.productRepository.findOneOrFail(id)
            return product
        } catch (err) {
            throw new NotFoundException()
        }
    }

    async getProductTransaction(id: any): Promise<Object>{
        try {
            const transaction = await this.transactionRepository.find({product: id.product})
            return transaction
        } catch (err) {
            throw new NotFoundException()
        }
    }

    // async findProdukInCategory(id: number): Promise<ProductEntity[]>{
    //     try {
    //         const category = await this.produkRepository.find({kategori: id})
    //         return category
    //     } catch (err) {
    //         throw new NotFoundException()
    //     }
    // }

    // async update(newData: UpdateProdukDTO, id): Promise<ProductEntity> {
    //     const product = await this.findOneById(id);
    //     product.nama = newData.nama
    //     product.deskripsi = newData.deskripsi
    //     product.gambar = newData.gambar
    //     product.kategori = newData.kategori
    //     product.stok = newData.stok
    //     return this.produkRepository.save(product)
    // }

    // async delete(id: number): Promise<ProductEntity> {
    //     const product = <ProductEntity>await this.findOneById(id);
        
    //     return this.produkRepository.remove(product)

    // }
}