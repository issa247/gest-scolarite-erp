import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExamsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, data: { name: string; date: string; type: string }) {
    return {
      schoolId,
      name: data.name,
      date: data.date,
      type: data.type,
    };
  }

  async findAll(schoolId: string) {
    return [{ schoolId, name: 'Examen de fin de trimestre', date: '2026-12-15', type: 'trimestre' }];
  }
}
