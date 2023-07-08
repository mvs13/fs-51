import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
    private readonly dataSource: DataSource,
  ) {}

  create(newUser: CreateUserDto) {
    return this.repository.save(newUser);
  }

  async register(user: CreateUserDto) {
    const saltOrRounds = 10;
    user.password = await bcrypt.hash(user.password, saltOrRounds);
    return this.repository.save(user);
  }

  async login(userLogin: CreateUserDto) {
    // const userBase = await this.dataSource
    //   .getRepository(User)
    //   .createQueryBuilder('user')
    //   .where('user.email = :email', { email: userLogin.email });
    const userBase = await this.repository.findOneBy({
      email: userLogin.email,
    });
    if (!userBase) {
      return false;
    }
    return await bcrypt.compare(userLogin.password, userBase.password);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(email: string) {
    return this.repository.findOneBy({ email });
  }

  update(id: number, user4Update: UpdateUserDto) {
    return this.repository.save({ ...user4Update, id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
