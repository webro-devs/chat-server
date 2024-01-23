import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateUserDto {
  @ApiProperty({
    description: `name`,
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: `username`,
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    description: `phone`,
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: `bio`,
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  bio: string;
}

export default CreateUserDto;
