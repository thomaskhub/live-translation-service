import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    app.enableVersioning({ type: VersioningType.URI });
    app.useGlobalPipes(new ValidationPipe());

    const env = process.env.ENV;
    await app.listen(process.env.PORT);
}
bootstrap();
