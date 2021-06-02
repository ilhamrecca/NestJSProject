
import {IsDate, IsEmail, IsIn, IsISO8601, isISO8601, IsNotEmpty, IsOptional, IsString, Length, ValidateIf } from "class-validator";

export class UpdateUserDto{
    @IsOptional()
    @IsString()
    @Length(3-20)
    namaDepan: string
    
    @IsString()
    @Length(3-20)
    namaBelakang: string

    // @IsEmail()
    // @IsNotEmpty()
    // email: string;
    
    @IsOptional()
    @Length(8, 20)
    password: string

    @IsOptional()
    @IsIn(["Laki-Laki", "Perempuan"])
    jenisKelamin

    @IsOptional()
    @IsISO8601()
    tanggalLahir: Date
    
}