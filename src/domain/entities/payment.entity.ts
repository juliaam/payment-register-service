export type TPayment = Pick<Payment, 'codAssinatura' & 'valorPago'> & {
  dia: number;
  mes: number;
  ano: number;
};
export class Payment {
  constructor(
    public codigo: number,
    public codAssinatura: number,
    public valorPago: number,
    public dataPagamento: Date,
  ) {}
}
