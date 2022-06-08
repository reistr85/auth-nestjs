import { Module } from '@nestjs/common';
import { databaseProviders } from './data/type-orm/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
