import { Controller, Post } from '@nestjs/common';
import { PaymentService } from './app.service';

@Controller('payment_register')
export class PaymentSController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('emit')
  emit() {
    this.paymentService.emit();
  }
}
