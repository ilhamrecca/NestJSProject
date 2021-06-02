
import {IsDate, IsEmail, IsIn, IsISO8601, isISO8601, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto{
    @IsString()
    @Length(3-20)
    namaDepan: string
    
    @IsString()
    @Length(3-20)
    namaBelakang: string

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Length(8, 20)
    password: string

    @IsIn(["Laki-Laki", "Perempuan"])
    jenisKelamin

    @IsISO8601()
    tanggalLahir: Date
    
}