import { Injectable } from '@nestjs/common';
import { IsEmail, IsEnum, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RegexHelper } from 'src/shared/helpers/regex.helper';
import { MessagesHelper } from 'src/shared/helpers/messages.helper';
import { Roles } from 'src/shared/enums/roles.enum';

@Injectable()
export class UserCreateDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  @IsString()
  role_id: string;

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
