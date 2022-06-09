import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { CustomersController } from 'src/presentation/customers.controller';
import { GetAllCustomersUseCase } from 'src/use-cases/customers/get-all-customers.usecase';
import { CustomersProviders } from './customers.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomersController],
  providers: [...CustomersProviders, GetAllCustomersUseCase],
})
export class CustomersModule {}
