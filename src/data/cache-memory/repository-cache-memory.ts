import { Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';

import { Entity } from 'src/core/base/entity';
import { Repository } from 'src/core/base/repository';

@Injectable()
export class RepositoryCacheMemory<
  TEntity extends Entity,
> extends Repository<TEntity> {
  protected readonly items: TEntity[];

  constructor() {
    super();
    this.items = [];
  }

  public create(data: TEntity): TEntity {
    data.id = uuidV4();
    data.created_at = new Date();
    data.updated_at = new Date();
    const count = this.items.push(data);

    return this.items[count - 1];
  }

  public update(id: string, data: TEntity): TEntity {
    const index = this.getIndexById(id);

    if (index === -1) {
      // todo: trate o caso de não encontrar o item a ser atualizado
    }

    this.items[index] = data;
    return this.items[index];
  }

  public getById(id: string): TEntity {
    const items = this.items.find((item) => item.id === id);

    return items;
  }

  public getAll(): TEntity[] {
    return this.items;
  }

  public delete(id: string): void {
    const index = this.getIndexById(id);

    if (index === -1) {
      // todo: trate o caso de não encontrar o item a ser deletado
    }

    this.items.splice(index, 1);
  }

  private getIndexById(id: string) {
    return this.items.findIndex((item) => item.id === id);
  }
}
