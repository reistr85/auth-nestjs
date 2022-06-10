import { DataSource } from 'typeorm';
import { User } from '../../core/domain/entities/user.entity';

export const UsersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];