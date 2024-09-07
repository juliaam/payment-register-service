import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentService {
  constructor(@Inject('payment_service') private rabbitClient: ClientProxy) {}

  emit() {
    this.rabbitClient.emit('pattern1', {
      oi: 'a',
    });
    return { message: 'emit feito!' };
  }
}
