import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import * as moment from 'moment';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private repository: Repository<Post>,
  ) {}

  create(data: CreatePostDto) {
    return this.repository.save({
      ...data,
      changed_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdatePostDto) {
    return this.repository.save({ ...data, id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
