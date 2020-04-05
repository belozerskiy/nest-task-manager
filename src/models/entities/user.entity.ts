import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  hash: string;

  constructor(username, password) {
    super();
    this.username = username;
    this.hash = password;
  }

  async validatePassword(password): Promise<boolean> {
    const { hash } = this;
    const result = await bcrypt.compare(password, hash);
    return result;
  }
}
