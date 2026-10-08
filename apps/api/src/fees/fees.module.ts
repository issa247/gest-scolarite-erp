import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { FeesService } from './fees.service';
import { FeesController } from './fees.controller';

@Module({
  imports: [PrismaModule],
  controllers: [FeesController],
  providers: [FeesService],
  exports: [FeesService],
})
export class FeesModule {}
