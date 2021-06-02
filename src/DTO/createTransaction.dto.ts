
import { Type } from "class-transformer";
import {ArrayMinSize, ArrayNotEmpty, IsArray, IsNumber, isNumber, IsString, Length, ValidateNested } from "class-validator";
import { TransactionDTO } from "./transaction.dto";

export class CreateTransationDTO{
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => TransactionDTO)
    transaction: TransactionDTO[];


    @IsString()
    @Length(2, 3)
    jenisTransaksi: string
}