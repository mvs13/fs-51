import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/category/entities/category.entity';
import { postStatus } from '../entities/post.entity';

export class CreatePostDto {
  @ApiProperty({ description: 'Заголовок поста' })
  title: string;
  @ApiProperty({ description: 'Описание поста' })
  description: string;
  @ApiProperty({ description: 'Категория', type: () => Category })
  category: Category;
  @ApiProperty({ description: 'Статус', enum: () => postStatus })
  status: postStatus;
  @ApiProperty({ description: 'Дата последнего изменения' })
  changed_at: Date;
}
