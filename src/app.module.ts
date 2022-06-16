import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { setEnvironment } from './infra/environments';
import { UsersModule } from './infra/modules/users/users.modules';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AuthModule } from './infra/modules/auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: setEnvironment(),
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrationsTableName: 'migrations',
      migrations: ['dist/data/type-orm/migrations/*.js'],
      cli: { migrationsDir: `${__dirname}/../data/type-orm/migrations` },
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
