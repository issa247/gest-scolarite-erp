import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AdmissionsService } from './admissions.service';
import { AdmissionsController } from './admissions.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AdmissionsController],
  providers: [AdmissionsService],
  exports: [AdmissionsService],
})
export class AdmissionsModule {}
