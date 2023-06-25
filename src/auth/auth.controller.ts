import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService, private authService: AuthService) {

    }

    @Post('/login')
    async login(@Body() body: { email: string, password: string }) {
        return this.authService.validateUser(body);
    }
}
