import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CreatePayment_US } from './application/create-payment.use-case';
import { PaymentRepository } from './domain/repositories/payment.repository';
import { PrismaPaymentRepository } from './interface-adapters/persistence/repositories/payment.repository';
import { PaymentController } from './interface-adapters/controllers/payment.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'payment_service',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://kmwhllfz:OWG7biH_cT6cTcUt2cfh1dh0RIhDqV0f@jackal.rmq.cloudamqp.com/kmwhllfz',
          ],
          queue: 'payment_queue_send',
        },
      },
    ]),
  ],
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
