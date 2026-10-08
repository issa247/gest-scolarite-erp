import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, data: { name: string; code: string; coefficient: number }) {
    return this.prisma.subject.create({
      data: {
        schoolId,
        name: data.name,
        code: data.code,
        coefficient: data.coefficient,
      },
    });
  }

  async findAll(schoolId: string) {
    return this.prisma.subject.findMany({
      where: { schoolId },
    });
  }
}
