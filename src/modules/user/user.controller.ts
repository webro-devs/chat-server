import { Controller, Get, Body, Patch, Param, Delete, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Method: returns all users' })
  @ApiOkResponse({
    description: 'The users were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async findAll():Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Method: returns user by id' })
  @ApiOkResponse({
    description: 'The user were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Method: creates new user' })
  @ApiCreatedResponse({
    description: 'The user was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: CreateUserDto) {
    return await this.userService.create(data);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Method: updating user' })
  @ApiOkResponse({
    description: 'User was changed',
  })
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return await this.userService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Method: updating user' })
  @ApiOkResponse({
    description: 'User was changed',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return await this.userService.remove(id);
  }
}
