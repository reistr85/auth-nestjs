import { Observable } from 'rxjs';
import { Entity } from './entity';

export abstract class Repository<TEntity> extends Entity {
  abstract create(data: TEntity): Observable<TEntity>;
  abstract update(id: string, data: TEntity): Observable<TEntity>;
  abstract patch(id: string, data: Partial<TEntity>): Observable<TEntity>;
  abstract getById(id: string): Observable<TEntity>;
  abstract getAll(): Observable<TEntity[]>;
  abstract getOne(filter: Partial<TEntity>): Observable<TEntity>;
  abstract getMany(filter: Partial<TEntity>): Observable<TEntity[]>;
  abstract delete(id: string): Observable<void>;
}
