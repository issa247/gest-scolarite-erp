import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClassesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, data: { name: string; level: string; capacity?: number }) {
    return this.prisma.schoolClass.create({
      data: {
        schoolId,
        name: data.name,
        level: data.level,
        capacity: data.capacity,
      },
    });
  }

  async findAll(schoolId: string) {
    return this.prisma.schoolClass.findMany({
      where: { schoolId },
      include: { students: true },
    });
  }

  async findOne(id: string, schoolId: string) {
    return this.prisma.schoolClass.findFirst({
      where: { id, schoolId },
      include: { students: true },
    });
  }
}
