import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdukController } from 'src/Controller/product.controller';
import { TransactionController } from 'src/Controller/transaction.controler';
import { ProductEntity } from 'src/entity/product.entity';
import { TransactionEntity } from 'src/entity/transaction.entity';
import { ProdukService } from 'src/Services/product.service';
import { TransactionService } from 'src/Services/transaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity, ProductEntity])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
