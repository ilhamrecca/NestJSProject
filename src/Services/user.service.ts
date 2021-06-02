import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "src/Auth/auth.service";
import { CreateUserDto } from "src/DTO/createUser.dto";
import { UpdateUserDto } from "src/DTO/updateUser.dto";
import { UserEntity } from "src/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private authService: AuthService) { }
    // private authService: AuthService;

    async signUp(userData: CreateUserDto): Promise<Object> {
        userData.password = await this.authService.hashPassword(userData.password)
        const newUser = this.userRepository.create(userData); 
        delete newUser.password;
        delete newUser.email;
        const newUserData = {
            data: newUser,
            session: await this.authService.generate({ email: userData.email })
        }
        return newUserData;
    }

    async findUser(email): Promise<CreateUserDto>{
        try {
            const user = await this.userRepository.findOneOrFail({ email: email })
            return user
            
        } catch (err) {
            throw new UnauthorizedException()
        }
    }

    async login(email: string, password:string): Promise<Object> {
        
        const user = await this.findUser(email)
        if (await this.authService.comparePassword(password, user.password)){
            
            const newUserData = {
                data: user,
                session: await this.authService.generate({ email: user.email })
            }
            delete user.email;
            delete user.password;
            return newUserData;
        }
           
    }

    async update(newData: UpdateUserDto, email): Promise<UpdateUserDto> {
        const user = await this.findUser(email);
        user.namaDepan = newData.namaDepan
        user.namaBelakang = newData.namaBelakang
        user.tanggalLahir = newData.tanggalLahir
        user.jenisKelamin = newData.jenisKelamin
        delete user.password
        return this.userRepository.save(user)
    }
}