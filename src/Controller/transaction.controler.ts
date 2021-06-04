import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/Auth/jwt-auth.guard';

import { CreateTransationDTO } from 'src/DTO/createTransaction.dto';

import { TransactionService } from 'src/Services/transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createProduk(@Body() transaction: CreateTransationDTO): any {
    return this.transactionService.createTransaction(transaction);
  }

  @UseGuards(JwtAuthGuard)
  @Get('product/:product')
  findProdukInCategory(@Param() id: number): any {
    return this.transactionService.getProductTransaction(id);
  }
}
