import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){}

    async validateUser(body: { email: string, password: string }){
        const user = await this.userService.findByEmail(body.email);
        if (user) {
            if (user.password === body.password) return user
            return "password does not match";
        }
        return null
    }
}
