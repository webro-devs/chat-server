import { Injectable } from '@nestjs/common';
import { PrismaService } from '../_prisma/prisma.service';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll():Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string):Promise<User> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      data:updateUserDto,
      where:{
        id
      }
    });
  }

  async create(data:CreateUserDto){
    return await this.prismaService.user.create({data})
  }

  async remove(id: string) {
    return await this.prismaService.user.delete({where:{id}})
  }
}
