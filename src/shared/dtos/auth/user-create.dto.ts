import { Injectable } from '@nestjs/common';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { TimestampDto } from 'src/core/base/timestamp.dto';

@Injectable()
export class UserCreateDto extends TimestampDto {
  id?: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
