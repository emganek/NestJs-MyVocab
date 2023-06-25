import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {

    }

    get(): Promise<any> {
        return this.userRepository.find();
    }

    create(body: CreateUserDto): Promise<UserEntity> {
        return this.userRepository.save(body);
    }

    show(userId: number) {
        return this.userRepository.findOne({ where: { id: userId } });
    }

    findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }

    update(userId: number, body: UpdateUserDto) {
        return this.userRepository.update(userId, body);
    }

    delete(userId: number) {
        return this.userRepository.delete(userId);
    }
}
