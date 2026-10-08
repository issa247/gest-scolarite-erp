import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, dto: CreateStudentDto) {
    return this.prisma.student.create({
      data: {
        schoolId,
        firstName: dto.firstName,
        lastName: dto.lastName,
        matricule: dto.matricule,
        gender: dto.gender,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : null,
        placeOfBirth: dto.placeOfBirth,
        classId: dto.classId,
        photoUrl: dto.photoUrl,
      },
    });
  }

  async findAll(schoolId: string) {
    return this.prisma.student.findMany({
      where: { schoolId },
      include: { class: true, parents: { include: { parent: true } } },
    });
  }

  async findOne(id: string, schoolId: string) {
    return this.prisma.student.findFirst({
      where: { id, schoolId },
      include: { class: true, parents: { include: { parent: true } } },
    });
  }
}
