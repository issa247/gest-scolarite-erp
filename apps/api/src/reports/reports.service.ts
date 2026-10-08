import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getSchoolSummary(schoolId: string) {
    const students = await this.prisma.student.count({ where: { schoolId } });
    const payments = await this.prisma.payment.aggregate({ where: { schoolId }, _sum: { amount: true } });

    return {
      schoolId,
      students,
      totalCollected: payments._sum.amount || 0,
      status: 'ok',
    };
  }
}
