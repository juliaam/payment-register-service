import { Injectable } from '@nestjs/common';
import { PaymentRepository } from 'src/domain/repositories/payment.repository';
import { PaymentDto } from 'src/interface-adapters/dto/Payment';

@Injectable()
export class CreatePayment_US {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async execute(body: PaymentDto): Promise<void> {
    await this.paymentRepository.register(body);
  }
}
