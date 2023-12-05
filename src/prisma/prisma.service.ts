import { HttpCode, HttpException, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { HttpStatusCode } from 'axios';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    ssoService: any;
    async onModuleInit() {
        await this.$connect();
    }

    static handlePrismaError = (error: any) => {
        switch (error.code) {
            case 'P2002':
                return new HttpException(
                    'Unique constraint failed [' + error.meta + ']',
                    HttpStatusCode.BadRequest
                );

            case 'P2025':
                return new HttpException(
                    'Record to update not found [' + error.meta + ']',
                    HttpStatusCode.BadRequest
                );
            default:
                return error.code;
        }
    };
}
