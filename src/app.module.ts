import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { setEnvironment } from './infra/environments';
import { UsersModule } from './module/users/users.modules';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
console.log(__dirname);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Reistr851120@',
      database: 'ampar',
      synchronize: false,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrationsTableName: 'migrations',
      migrations: ['dist/data/type-orm/migrations/*.js'],
      cli: { migrationsDir: `${__dirname}/../data/type-orm/migrations` },
      namingStrategy: new SnakeNamingStrategy(),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: setEnvironment(),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
