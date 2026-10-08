import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SchoolsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.school.findMany();
  }

  async create(data: { name: string; shortName?: string; countryCode?: string }) {
    return this.prisma.school.create({
      data: {
        name: data.name,
        shortName: data.shortName,
        countryCode: data.countryCode ?? 'CI',
      },
    });
  }
}
