
import {IsString, Length } from "class-validator";

export class CreateCategoryDTO{
    @IsString()
    @Length(3, 100)
    nama: string
    
    @IsString()
    @Length(3, 100)
    deskripsi: string
}