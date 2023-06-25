import { Controller, Get, Param, Post, Delete, Put, Body, ParseIntPipe } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }
    
    @Get()
    async getUsers() {
        const result = await this.userService.get();
        return result;
    }

    @Post()
    createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body)
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.show(userId)
    }

    @Put('/:userId')
    updateUser(@Param('userId', ParseIntPipe) userId:number, @Body() body: UpdateUserDto){
        return this.userService.update(userId, body)
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.delete(userId); 
    }
}
