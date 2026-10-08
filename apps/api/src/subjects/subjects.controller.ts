import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
@UseGuards(JwtAuthGuard)
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.subjectsService.findAll(req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { name: string; code: string; coefficient: number }) {
    return this.subjectsService.create(req.user.schoolId, body);
  }
}
