import { PrismaClient } from '@prisma/client';
export default class LoginModel {
    private prisma;
    constructor(prisma: PrismaClient);
    login(data: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
