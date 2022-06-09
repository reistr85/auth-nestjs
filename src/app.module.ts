import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './module/auth.module';
import { ConfigModule } from '@nestjs/config';
import { setEnvironment } from './infra/environments';
import { CustomersModule } from './module/customers/customers.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: setEnvironment(),
    }),
    AuthModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
