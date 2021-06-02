import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class UserEntity{ 
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    namaDepan: string

    @Column()
    namaBelakang: string

    @Column()
    jenisKelamin: string

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase()
    }
    @Column({ nullable: false })
    email: string

    @Column()
    tanggalLahir: Date

    @Column({nullable: false})
    password: string  
}