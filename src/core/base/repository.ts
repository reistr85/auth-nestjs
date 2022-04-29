import { EntityBase } from './entity.base';

export abstract class Repository<TEntity> extends EntityBase {
  abstract create(data: TEntity): TEntity;
  abstract update(id: string, data: TEntity): TEntity;
  abstract getById(id: string): TEntity;
  abstract getAll(): TEntity[];
  abstract delete(id: string): void;
}
