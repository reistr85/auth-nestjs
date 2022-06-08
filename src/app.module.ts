import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './module/auth.module';
import { ConfigModule } from '@nestjs/config';
import { setEnvironment } from './infra/environments';
import { UsersModule } from './module/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    // UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: setEnvironment(),
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
