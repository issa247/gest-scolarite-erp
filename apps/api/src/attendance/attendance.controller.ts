import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
@UseGuards(JwtAuthGuard)
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('record')
  async recordAttendance(
    @Req() req: any,
    @Body() body: { studentId: string; date: string; status: string; notes?: string },
  ) {
    return this.attendanceService.recordAttendance(
      req.user.schoolId,
      body.studentId,
      new Date(body.date),
      body.status as 'present' | 'absent' | 'late',
      body.notes,
    );
  }
}
