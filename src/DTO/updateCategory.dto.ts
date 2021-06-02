
import {IsOptional, IsString, Length } from "class-validator";

export class UpdateCategoryDTO{
    @IsOptional()
    @IsString()
    @Length(3, 100)
    nama: string
    
    @IsOptional()
    @IsString()
    @Length(3, 100)
    deskripsi: string
}