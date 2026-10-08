import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AttendanceRecord {
  id: string;
  studentId: string;
  date: Date;
  status: 'present' | 'absent' | 'late';
  notes?: string;
}

export class AttendanceService {
  constructor(private readonly prisma: PrismaClient) {}

  async recordAttendance(
    schoolId: string,
    studentId: string,
    date: Date,
    status: 'present' | 'absent' | 'late',
    notes?: string,
  ) {
    return prisma.$executeRaw`
      INSERT INTO attendance_records (school_id, student_id, date, status, notes)
      VALUES (${schoolId}, ${studentId}, ${date}, ${status}, ${notes})
    `;
  }
}
