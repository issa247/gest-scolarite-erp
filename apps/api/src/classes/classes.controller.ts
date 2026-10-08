import { Body, Controller, Get, Param, Post, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ClassesService } from './classes.service';

@Controller('classes')
@UseGuards(JwtAuthGuard)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.classesService.findAll(req.user.schoolId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: any) {
    return this.classesService.findOne(id, req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { name: string; level: string; capacity?: number }) {
    return this.classesService.create(req.user.schoolId, body);
  }
}
