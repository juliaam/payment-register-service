import { PaymentDto } from 'src/interface-adapters/dto/Payment';

export abstract class PaymentRepository {
  abstract register(body: PaymentDto): Promise<void>;
}
