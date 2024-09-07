import { PaymentRepository } from 'src/domain/repositories/payment.repository';
import { PaymentDto } from 'src/interface-adapters/dto/Payment';
import { prisma } from '../database/prisma';

export class PrismaPaymentRepository implements PaymentRepository {
  async register({
    ano,
    mes,
    dia,
    codAssinatura,
    valorPago,
  }: PaymentDto): Promise<any> {
    const dataPagamento = new Date(ano, mes - 1, dia);

    return await prisma.pagamento.create({
      data: {
        codAssinatura,
        valorPago,
        dataPagamento,
      },
    });
  }
}
