import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/User.dto';

export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOneById(id: number) {
    await this.userRepository.findOne({ where: { id } });
  }
  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  async create(userDto: UserDto) {
    return this.userRepository.save(userDto);
  }
  async findOneByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      return user;
    }
  }
  async getProfile(id: number): Promise<any> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      return { ...user, profile: true };
    }
  }
}
