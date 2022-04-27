import { Entity } from './entity';

export abstract class Repository<TEntity> extends Entity {
  abstract create(data: TEntity): TEntity;
  abstract update(id: string, data: TEntity): TEntity;
  abstract getById(id: string): TEntity;
  abstract getAll(): TEntity[];
  abstract delete(id: string): void;
}
