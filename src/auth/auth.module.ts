import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/db.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { AuthGuard } from './auth.guard';

@Module({
  imports: [DatabaseModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
