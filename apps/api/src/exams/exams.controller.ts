import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ExamsService } from './exams.service';

@Controller('exams')
@UseGuards(JwtAuthGuard)
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.examsService.findAll(req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { name: string; date: string; type: string }) {
    return this.examsService.create(req.user.schoolId, body);
  }
}
