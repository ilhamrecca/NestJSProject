
import { Optional } from "@nestjs/common";
import {IsNumber, IsOptional, IsString, Length } from "class-validator";

export class UpdateProdukDTO{
    @IsOptional()
    @IsString()
    @Length(3, 100)
    nama: string
    
    @IsOptional()
    @IsString()
    @Length(3, 100)
    deskripsi: string

    @IsOptional()
    @IsString()
    @Length(3, 100)
    gambar: string
    
    @IsOptional()
    @IsNumber()
    kategori: number

    @IsOptional()
    @IsNumber()
    stok: number
}