import { IsNotEmpty, IsNumber } from 'class-validator';

export class PaymentDto {
  @IsNumber()
  @IsNotEmpty()
  dia: number;

  @IsNumber()
  @IsNotEmpty()
  mes: number;

  @IsNumber()
  @IsNotEmpty()
  ano: number;

  @IsNumber()
  @IsNotEmpty()
  codAssinatura: number;

  @IsNumber()
  @IsNotEmpty()
  valorPago: number;
}
