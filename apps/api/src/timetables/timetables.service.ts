import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TimetablesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, data: { classId: string; day: string; startTime: string; endTime: string; subject: string }) {
    return {
      schoolId,
      classId: data.classId,
      day: data.day,
      startTime: data.startTime,
      endTime: data.endTime,
      subject: data.subject,
    };
  }

  async findAll(schoolId: string) {
    return this.prisma.schoolClass.findMany({
      where: { schoolId },
      include: { students: true },
    });
  }
}
