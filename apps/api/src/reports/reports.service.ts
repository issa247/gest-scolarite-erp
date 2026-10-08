import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  async getTotalStudents(schoolId: string) {
    return this.prisma.student.count({
      where: { schoolId },
    });
  }

  async getTotalCollected(schoolId: string) {
    const result = await this.prisma.payment.aggregate({
      where: { schoolId },
      _sum: { amount: true },
    });
    return result._sum.amount || 0;
  }

  async getOutstandingBalance(schoolId: string) {
    const invoices = await this.prisma.invoice.findMany({
      where: { schoolId, status: 'open' },
      include: { payments: { select: { amount: true } } },
    });

    return invoices.reduce((total, inv) => {
      const paid = inv.payments.reduce((sum, p) => sum + p.amount.toNumber(), 0);
      return total + (inv.total.toNumber() - paid);
    }, 0);
  }

  async getDashboardStats(schoolId: string) {
    const [totalStudents, totalCollected, outstandingBalance] = await Promise.all([
      this.getTotalStudents(schoolId),
      this.getTotalCollected(schoolId),
      this.getOutstandingBalance(schoolId),
    ]);

    return {
      totalStudents,
      totalCollected: parseFloat(totalCollected.toString()),
      outstandingBalance,
      recoveryRate: totalCollected > 0 ? ((totalCollected / (totalCollected + outstandingBalance)) * 100).toFixed(2) : '0.00',
    };
  }
}
