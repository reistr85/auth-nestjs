import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './module/auth.module';
import { ConfigModule } from '@nestjs/config';
import { setEnvironment } from './infra/environments';

@Module({
  imports: [
    AuthModule,
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
