import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PREFIX = 'api/v1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(PREFIX);
  setDocumentation(app);
  app.enableCors();
  app.use(
    rateLimit({
      windowMs: 10 * 1000 * 60,
      max: 1000,
      message:
        'Too many requests from this IP, please try again in 10 minutes 🔒',
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(Number(process.env.PORT));
  Logger.log(
    `🚀  Server ready at ${process.env.HOST}:${process.env.PORT}/${PREFIX}`,
  );
}

const setDocumentation = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Project name')
    .setDescription('Documentation app')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Project name',
  });
};

bootstrap().catch((e) => {
  Logger.error(`❌  Error starting server. ${e}`, 'Bootstrap');
  throw e;
});
