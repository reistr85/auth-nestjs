import { Injectable } from '@nestjs/common';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RegexHelper } from 'src/shared/helpers/regex.helper';
import { MessagesHelper } from 'src/shared/helpers/messages.helper';

@Injectable()
export class UserCreateDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  @IsString()
  type_user_id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @Matches(RegexHelper.password, { message: MessagesHelper.INVALID_PASSWORD })
  password: string;
}
