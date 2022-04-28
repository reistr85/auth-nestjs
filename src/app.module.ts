import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
