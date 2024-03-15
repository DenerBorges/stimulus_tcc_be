import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
config();

@Injectable()
export class PaymentService {
  private readonly mercadoPagoBaseUrl = 'https://api.mercadopago.com/v1';

  async realizarPagamentoPorPIX(
    amount: number,
    payerEmail: string,
    payerName: string,
    payerDocument: string,
    zipCode: string,
    street: string,
    streetNumber: string,
  ) {
    try {
      // Configurar o corpo da requisição de pagamento
      const body = {
        payment_method_id: 'pix',
        transaction_amount: amount,
        payer: {
          email: payerEmail,
          first_name: payerName,
          identification: {
            type: 'CPF',
            number: payerDocument,
          },
          address: {
            zip_code: zipCode,
            street_name: street,
            street_number: streetNumber,
          },
        },
        notification_url: process.env.NOTIFICATION_URL,
      };

      // Realizar a requisição de pagamento para o Mercado Pago
      const response = await axios.post(
        `${this.mercadoPagoBaseUrl}/payments?access_token=${process.env.REACT_APP_TOKEN_MERCADO_PAGO_PUBLIC}`,
        body,
      );

      // Retornar a resposta da requisição
      return response.data;
    } catch (error) {
      // Tratar erros
      throw new Error('Erro ao realizar o pagamento por PIX');
    }
  }
}
