import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CheckController } from './check.controller';
import { CheckService } from './check.service';

@Module({
  imports: [ConfigModule],
  controllers: [CheckController],
  providers: [CheckService],
})
export class CheckModule {}
