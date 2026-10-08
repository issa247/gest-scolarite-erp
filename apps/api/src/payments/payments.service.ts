import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, data: { studentId: string; amount: number; method: string; reference?: string }) {
    const paymentRef = data.reference ?? `PAY-${Date.now()}`;

    return this.prisma.payment.create({
      data: {
        schoolId,
        studentId: data.studentId,
        amount: data.amount,
        method: data.method,
        reference: paymentRef,
        status: 'confirmed',
      },
    });
  }

  async findAll(schoolId: string) {
    return this.prisma.payment.findMany({
      where: { schoolId },
      include: { student: true },
    });
  }
}
