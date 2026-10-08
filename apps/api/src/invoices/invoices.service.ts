import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private readonly prisma: PrismaService) {}

  private generateReference(): string {
    return `INV-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }

  async create(schoolId: string, data: { studentId: string; total: number; dueDate?: Date }) {
    return this.prisma.invoice.create({
      data: {
        schoolId,
        studentId: data.studentId,
        reference: this.generateReference(),
        total: data.total,
        dueDate: data.dueDate,
        status: 'open',
      },
    });
  }

  async findAll(schoolId: string) {
    return this.prisma.invoice.findMany({
      where: { schoolId },
      include: { student: true, payments: true },
    });
  }

  async findByStudent(schoolId: string, studentId: string) {
    return this.prisma.invoice.findMany({
      where: { schoolId, studentId },
      include: { payments: true },
    });
  }

  async updateStatus(id: string, schoolId: string, status: string) {
    return this.prisma.invoice.update({
      where: { id },
      data: { status },
    });
  }
}
