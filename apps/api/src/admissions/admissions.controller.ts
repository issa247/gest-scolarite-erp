import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AdmissionsService } from './admissions.service';

@Controller('admissions')
@UseGuards(JwtAuthGuard)
export class AdmissionsController {
  constructor(private readonly admissionsService: AdmissionsService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.admissionsService.findAll(req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { studentId: string; source?: string }) {
    return this.admissionsService.create(req.user.schoolId, body.studentId, body.source);
  }
}
