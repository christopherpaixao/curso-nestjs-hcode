import { PrismaModule } from 'src/prisma/prsima.module';
import { UserModule } from '../user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'xA2CJTpDYsp)QZ1S<=j+K@ulKO3z-CTf',
    }),
    UserModule,
    PrismaModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
