import { Entity, Column, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { EntityBase } from 'src/core/base/entity.base';
import { Role } from './role.entity';
import { hashSync } from 'bcrypt';

@Entity('users')
export class User extends EntityBase {
  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column()
  public email: string;

  @Column()
  public role_id: string;

  @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
