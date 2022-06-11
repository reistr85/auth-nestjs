import { Entity, Column, OneToMany } from 'typeorm';
import { EntityBase } from 'src/core/base/entity.base';
import { User } from 'src/shared/decorator';

@Entity('type_users')
export class TypeUser extends EntityBase {
  // @OneToMany(type => User, (photo) => photo.user)
  // users: User[];

  @Column()
  public name: string;

  @Column()
  public situation: string;
}
