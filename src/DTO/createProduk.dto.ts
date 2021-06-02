
import {IsNumber, isNumber, IsString, Length } from "class-validator";

export class CreateProdukDTO{
    @IsString()
    @Length(3, 100)
    nama: string
    
    @IsString()
    @Length(3, 100)
    deskripsi: string

    @IsString()
    @Length(3, 100)
    gambar: string
    
    @IsNumber()
    kategori: number

    @IsNumber()
    stok: number
}