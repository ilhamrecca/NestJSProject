import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { loginDTO } from "src/DTO/login.dto";
import { CreateUserDto } from "src/DTO/createUser.dto";
import { UserService } from "src/Services/user.service";
import { UpdateUserDto } from "src/DTO/updateUser.dto";
import { JwtAuthGuard } from "src/Auth/jwt-auth.guard";

@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Post('SignUp')
    signUp(@Body() user: CreateUserDto): any{
        return this.userService.signUp(user)
    }

    @Post('Login')
    login(@Body() user: loginDTO): any{
        return this.userService.login(user.email, user.password)
    }

    @UseGuards(JwtAuthGuard)
    @Post('Update')
    update(@Body() user: UpdateUserDto, @Request() req): any{
        
        return this.userService.update(user, req.user.email)
    }
}