import { Injectable } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user.entity';
import { RepositoryCacheMemory } from './repository-cache-memory';
import { UserRepository } from 'src/core/repositories/user.repository';

@Injectable()
export class UsersCacheMemoryRepository
  extends RepositoryCacheMemory<User>
  implements UserRepository
{
  findByEmail(email: string): User {
    return this.items.find((user) => user.email === email);
  }
}
