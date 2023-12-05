import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

const imports = [PrismaModule];

@Module({
    imports: imports,
    controllers: [],
    providers: [AppService],
})
export class AppModule {
    constructor() {}
}
