import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TimetablesService } from './timetables.service';
import { TimetablesController } from './timetables.controller';

@Module({
  imports: [PrismaModule],
  controllers: [TimetablesController],
  providers: [TimetablesService],
  exports: [TimetablesService],
})
export class TimetablesModule {}
