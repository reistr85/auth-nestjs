import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EntityBase } from 'src/core/base/entity.base';
import { TypeUser } from './type-user.entity';

@Entity('users')
export class User extends EntityBase {
  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column()
  public email: string;

  @Column()
  public type_user_id: string;

  @ManyToOne(() => TypeUser, { eager: true })
  @JoinColumn({ name: 'type_user_id' })
  type_user: TypeUser;
}
