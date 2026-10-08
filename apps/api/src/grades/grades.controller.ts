import { Body, Controller, Get, Param, Post, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GradesService } from './grades.service';

@Controller('grades')
@UseGuards(JwtAuthGuard)
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Get('student/:studentId')
  async findByStudent(@Param('studentId') studentId: string, @Req() req: any) {
    return this.gradesService.findByStudent(req.user.schoolId, studentId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { studentId: string; subject: string; value: number; semester: string }) {
    return this.gradesService.create(req.user.schoolId, body);
  }
}
