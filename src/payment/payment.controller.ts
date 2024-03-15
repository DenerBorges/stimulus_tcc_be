import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @IsPublic()
  @Post('pix')
  async realizarPagamentoPorPIX(@Body() body: any) {
    try {
      const {
        amount,
        payerEmail,
        payerName,
        payerDocument,
        zipCode,
        street,
        streetNumber,
      } = body;

      const paymentResponse = await this.paymentService.realizarPagamentoPorPIX(
        amount,
        payerEmail,
        payerName,
        payerDocument,
        zipCode,
        street,
        streetNumber,
      );

      return { message: 'Pagamento realizado com sucesso', paymentResponse };
    } catch (error) {
      return { error: 'Erro ao processar o pagamento por PIX' };
    }
  }
}
