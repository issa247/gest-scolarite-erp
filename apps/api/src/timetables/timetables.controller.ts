import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TimetablesService } from './timetables.service';

@Controller('timetables')
@UseGuards(JwtAuthGuard)
export class TimetablesController {
  constructor(private readonly timetablesService: TimetablesService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.timetablesService.findAll(req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { classId: string; day: string; startTime: string; endTime: string; subject: string }) {
    return this.timetablesService.create(req.user.schoolId, body);
  }
}
