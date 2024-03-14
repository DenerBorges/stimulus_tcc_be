import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: [
      'http://localhost:3000', // Permitir acesso local para desenvolvimento
      'https://stimulus-tcc-fe.vercel.app', // Permitir acesso ao site do Vercel
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization', // Cabeçalhos permitidos
    credentials: true, // Permitir envio de credenciais (cookies, cabeçalhos de autorização)
    optionsSuccessStatus: 200, // Status de sucesso para solicitações OPTIONS
  };

  app.use(cors(corsOptions));

  app.setGlobalPrefix('/api/v1/');

  await app.listen(5000);
}
bootstrap();
