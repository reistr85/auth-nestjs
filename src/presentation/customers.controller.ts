import { Controller, Get } from '@nestjs/common';
import { GetAllCustomersUseCase } from 'src/use-cases/customers/get-all-customers.usecase';

@Controller('/customers')
export class CustomersController {
  constructor(private getAllUsers: GetAllCustomersUseCase) {}

  @Get()
  public async findAll(): Promise<any[]> {
    return await this.getAllUsers.execute();
  }
}
