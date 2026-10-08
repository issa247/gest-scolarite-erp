import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GradesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, data: { studentId: string; subject: string; value: number; semester: string }) {
    if (data.value < 0 || data.value > 20) {
      throw new Error('Grade must be between 0 and 20');
    }

    return {
      schoolId,
      studentId: data.studentId,
      subject: data.subject,
      value: data.value,
      semester: data.semester,
      recordedAt: new Date(),
    };
  }

  async findByStudent(schoolId: string, studentId: string) {
    return {
      studentId,
      schoolId,
      grades: [
        { subject: 'Français', value: 15, semester: 'S1' },
        { subject: 'Mathématiques', value: 14, semester: 'S1' },
      ],
    };
  }
}
