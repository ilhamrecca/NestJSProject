import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './../ormconfig'
import { UserModule } from './Modules/user.module';
import { CategoryModule } from './Modules/category.module';
import { ProductModule } from './Modules/product.module';
import { TransactionModule } from './Modules/transaction.module';
@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, CategoryModule, ProductModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
