import { Injectable, Request } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { from, Observable, of } from "rxjs";
const bcrypt = require("bcrypt")
@Injectable()
export class AuthService{ 
    constructor(private readonly jwtService: JwtService) {
        
    }
    // private configService: ConfigService
    generate(user: Object): Object{
        // console.log(user)
        return this.jwtService.signAsync({user})
    }

    hashPassword(password: string): string{
        return bcrypt.hash(password, 12);
    }

    comparePassword(newPassword: string, passwordHash: string): any{
        return (bcrypt.compare(newPassword, passwordHash))
    }
}