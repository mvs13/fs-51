import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';

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

export const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});
