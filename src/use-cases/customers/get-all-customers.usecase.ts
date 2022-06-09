import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/core/domain/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetAllCustomersUseCase {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private photoRepository: Repository<User>,
  ) {}

  public async execute(): Promise<any[]> {
    return this.photoRepository.find();
  }
}
