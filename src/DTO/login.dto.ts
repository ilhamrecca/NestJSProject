
import {IsDate, IsEmail, IsIn, IsISO8601, isISO8601, IsNotEmpty, IsString, Length } from "class-validator";

export class loginDTO{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Length(8, 20)
    password: string
}