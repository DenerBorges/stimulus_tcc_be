import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://stimulus-tcc-fe.vercel.app',
      'https://api.mercadopago.com/v1/',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['content-type'],
    credentials: true,
  });

  app.setGlobalPrefix('/api/v1/');

  await app.listen(5000);
}
bootstrap();
