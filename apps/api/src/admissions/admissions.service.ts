import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(schoolId: string) {
    return this.prisma.admission.findMany({
      where: { schoolId },
      include: { student: true },
    });
  }

  async create(schoolId: string, studentId: string, source?: string) {
    return this.prisma.admission.create({
      data: {
        schoolId,
        studentId,
        source,
        status: 'pending',
      },
    });
  }
}
