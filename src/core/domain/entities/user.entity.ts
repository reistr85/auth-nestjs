import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { EntityBase } from 'src/core/base/entity.base';

@Entity('users')
export class User extends EntityBase {
  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column()
  public email: string;

  @Column()
  public situation: string;

  @Column()
  public created_by: string;

  @Column()
  public updated_by: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;

  @DeleteDateColumn()
  public deleted_at: Date;
}
