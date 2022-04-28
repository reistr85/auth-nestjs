import { ApiProperty } from '@nestjs/swagger';

export class SessionCreateDto {
  @ApiProperty({
    type: String,
    required: true,
    example: 'fulano@usemobile.xyz',
    description: 'Email utilizado para fazer login no sistema',
  })
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'strong_password',
    description: 'Senha utilizada para fazer login no sistema',
  })
  password: string;
}
