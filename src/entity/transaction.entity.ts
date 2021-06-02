import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class TransactionEntity{ 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    product: number

    @Column()
    amount: number

    @Column()
    jenisTransaksi: string
}