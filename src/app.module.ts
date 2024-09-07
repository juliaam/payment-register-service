import { Module } from '@nestjs/common';
import { PaymentController } from './interface-adapters/controllers/payment.controller';
import { CreatePayment_US } from './application/create-payment.use-case';
import { PaymentRepository } from './domain/repositories/payment.repository';
import { PrismaPaymentRepository } from './interface-adapters/persistence/repositories/payment.repository';

@Module({
  imports: [],
  controllers: [PaymentController],
  providers: [
    CreatePayment_US,
    {
      provide: PaymentRepository,
      useClass: PrismaPaymentRepository,
    },
  ],
})
export class AppModule {}
