import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity()
export class CategoryEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    nama: string

    @Column()
    deskripsi: string
}