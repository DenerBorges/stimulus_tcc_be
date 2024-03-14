import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://stimulus-tcc-fe.vercel.app',
      'https://api.mercadopago.com/v1/payments?access_token=TEST-3051181349670710-102513-f6e8887b06707649109e04503e4146cb-1524755092',
    ],
  });

  app.setGlobalPrefix('/api/v1/');

  await app.listen(5000);
}
bootstrap();
