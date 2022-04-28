import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntityBase {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
