import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // dto에 정의되지 않은 값을 body에 넘길 시 에러발생
      transform: true, // param으로 들어온 값은 무조건 string으로 들어오는데 이것을 number가 필요할 경우 자동변환
    }),
  );

  await app.listen(3000);
}
bootstrap();
