import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdukController } from 'src/Controller/product.controller';
import { ProductEntity } from 'src/entity/product.entity';
import { ProdukService } from 'src/Services/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProdukController],
  providers: [ProdukService],
})
export class ProductModule {}
