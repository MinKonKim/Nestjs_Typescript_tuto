import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  nickname: string;
  @Column({ unsigned: true })
  points: number;
  @Column()
  isAdmin: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
