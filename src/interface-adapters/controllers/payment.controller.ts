import { Body, Controller, Post } from '@nestjs/common';
import { CreatePayment_US } from 'src/application/create-payment.use-case';
import { PaymentDto } from '../dto/Payment';

@Controller('registrarpagamento')
export class PaymentController {
  constructor(private readonly createPayment_US: CreatePayment_US) {}

  @Post()
  async register(@Body() body: PaymentDto): Promise<void> {
    return await this.createPayment_US.execute(body);
  }
}
