import { TPayment } from '../entities/payment.entity';

export abstract class PaymentRepository {
  abstract register(body: TPayment): Promise<void>;
}
