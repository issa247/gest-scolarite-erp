import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FeesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, data: { name: string; code: string; amount: number; effectiveAt: Date }) {
    return this.prisma.feeItem.create({
      data: {
        schoolId,
        name: data.name,
        code: data.code,
        amount: data.amount,
        effectiveAt: data.effectiveAt,
      },
    });
  }

  async findAll(schoolId: string) {
    return this.prisma.feeItem.findMany({
      where: { schoolId, active: true },
    });
  }

  async findActive(schoolId: string) {
    return this.prisma.feeItem.findMany({
      where: {
        schoolId,
        active: true,
        effectiveAt: { lte: new Date() },
      },
    });
  }
}
