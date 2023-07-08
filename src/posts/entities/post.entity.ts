import { Category } from 'src/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum postStatus {
  DRAFT = 'черновик',
  MODER = 'на модерации',
  PUBLIC = 'опубликован',
  DEL = 'удалено',
}

@Entity('msg_brd_post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.posts, { eager: true })
  category: Category;

  @Column({
    type: 'enum',
    enum: postStatus,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({ type: 'datetime' })
  changed_at: Date;
}
