import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ParentsService } from './parents.service';
import { ParentsController } from './parents.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ParentsController],
  providers: [ParentsService],
  exports: [ParentsService],
})
export class ParentsModule {}
