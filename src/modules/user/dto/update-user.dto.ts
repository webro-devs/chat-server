import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

class UpdateUserDto  {
    @ApiProperty({
        description: `name`,
        example: '',
      })
      @IsOptional()
      @IsString()
      name: string;
    
      @ApiProperty({
        description: `username`,
        example: '',
      })
      @IsOptional()
      @IsString()
      username: string;
    
      @ApiProperty({
        description: `phone`,
        example: '',
      })
      @IsOptional()
      @IsString()
      phone: string;
    
      @ApiProperty({
        description: `bio`,
        example: '',
      })
      @IsOptional()
      @IsString()
      bio: string;
}

export default UpdateUserDto