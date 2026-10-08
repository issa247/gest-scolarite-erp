import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateParentDto } from './dto/create-parent.dto';

@Injectable()
export class ParentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, dto: CreateParentDto) {
    return this.prisma.parent.create({
      data: {
        schoolId,
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        phone: dto.phone,
        address: dto.address,
        profession: dto.profession,
      },
    });
  }

  async findAll(schoolId: string) {
    return this.prisma.parent.findMany({
      where: { schoolId },
      include: { students: { include: { student: true } } },
    });
  }
}
