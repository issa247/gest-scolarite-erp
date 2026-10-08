import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SchoolsService } from './schools.service';

@Controller('schools')
@UseGuards(JwtAuthGuard)
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  async findAll() {
    return this.schoolsService.findAll();
  }

  @Post()
  async create(@Body() body: { name: string; shortName?: string; countryCode?: string }) {
    return this.schoolsService.create(body);
  }
}
