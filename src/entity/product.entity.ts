import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { CategoryEntity } from './category.entity';
import { UserEntity } from './user.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nama: string;

  @Column()
  deskripsi: string;

  @Column()
  gambar: string;

  @Column()
  stok: number;

  @ManyToOne((type) => CategoryEntity, (category) => category.id)
  kategori: number;
}
