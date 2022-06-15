import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginUserDto {
  id: string;
  email: string;
  role: string;
}
