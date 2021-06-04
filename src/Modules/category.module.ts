import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/Auth/auth.module';
import { AuthService } from 'src/Auth/auth.service';

import { UserController } from 'src/Controller/user.controller';
import { CategoryEntity } from 'src/entity/category.entity';
import { CategoryController } from 'src/Controller/category.controller';
import { CategoryService } from 'src/Services/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]), AuthModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
