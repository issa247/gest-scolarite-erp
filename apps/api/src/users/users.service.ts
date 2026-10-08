import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(schoolId: string) {
    return this.prisma.user.findMany({
      where: { schoolId },
      include: { roles: { include: { role: true } } },
    });
  }

  async findOne(id: string, schoolId: string) {
    return this.prisma.user.findFirst({
      where: { id, schoolId },
      include: { roles: { include: { role: true } } },
    });
  }
}
