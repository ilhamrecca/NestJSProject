import { IsNumber, isNumber, IsString, Length } from 'class-validator';

export class TransactionDTO {
  @IsNumber()
  id: number;

  // @IsNumber()
  // product: number

  @IsNumber()
  amount: number;
}
