import { Entity, Column } from 'typeorm';
import { EntityBase } from 'src/core/base/entity.base';

@Entity()
export class User extends EntityBase {
  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column()
  public email: string;
}
