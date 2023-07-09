import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя (реальное)', type: String })
  first_name: string;
  @ApiProperty({ description: 'Фамилия' })
  last_name: string;
  @ApiProperty({ description: 'Адрес электронной почты' })
  email: string;
  @ApiProperty({ description: 'Пароль' })
  password: string;
}
