import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
@UseGuards(JwtAuthGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.studentsService.findAll(req.user.schoolId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: any) {
    return this.studentsService.findOne(id, req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() dto: CreateStudentDto) {
    return this.studentsService.create(req.user.schoolId, dto);
  }
}
