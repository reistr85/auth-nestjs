import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenDto {
  token: string;
}
