import {
  Body,
  Request,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
    private authServise: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/register')
  register(@Body() newUser: CreateUserDto) {
    return this.usersService.register(newUser);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authServise.login(req.user);
  }
}
