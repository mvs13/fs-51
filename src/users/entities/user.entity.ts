import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('msg_brd_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  nic_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
