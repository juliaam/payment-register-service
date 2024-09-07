import { Injectable } from '@nestjs/common';
import { TPayment } from 'src/domain/entities/payment.entity';
import { PaymentRepository } from 'src/domain/repositories/payment.repository';

@Injectable()
export class CreatePayment_US {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(body: TPayment): Promise<void> {
    return await this.paymentRepository.register(body);
  }
}
