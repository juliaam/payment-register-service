import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreatePayment_US } from 'src/application/create-payment.use-case';
import { PaymentDto } from '../dto/Payment';
import { ClientProxy } from '@nestjs/microservices';

@Controller('registrarpagamento')
export class PaymentController {
  constructor(
    private readonly createPayment_US: CreatePayment_US,
    @Inject('payment_service') private rabbitClient: ClientProxy,
  ) {}

  @Post()
  async register(@Body() body: PaymentDto): Promise<void> {
    const payment = await this.createPayment_US.execute(body);
    this.rabbitClient.emit('pattern1', payment);
  }
}
