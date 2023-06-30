import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class LoginModel {
  constructor(@Inject('prisma') private prisma: PrismaClient) {}

  public async login(data) {
    return await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
  }
}
