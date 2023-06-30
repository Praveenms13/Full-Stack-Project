import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { PrismaModule } from './datasource/prisma/prisma.module';
import { HomeController } from './home/home.controller'; // Import the HomeController

@Module({
  imports: [LoginModule, PrismaModule.register()],
  controllers: [HomeController],
  providers: [],
})
export class AppModule {}
