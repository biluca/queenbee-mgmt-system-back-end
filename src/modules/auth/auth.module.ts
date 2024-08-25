import { Module } from '@nestjs/common';
import { AuthController } from '../api/controllers/auth.controller';
import { AuthProvider } from 'src/providers/auth.provider';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AuthProviderInterface',
      useClass: AuthProvider,
    },
  ],
})
export class AuthModule {}
