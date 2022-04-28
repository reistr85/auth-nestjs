import { ApiProperty } from '@nestjs/swagger';

export class SessionCreateDto {
  @ApiProperty({
    type: String,
    required: true,
    example: 'fulano@usemobile.xyz',
  })
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'strong_password',
  })
  password: string;
}
