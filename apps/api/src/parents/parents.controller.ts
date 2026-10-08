import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ParentsService } from './parents.service';
import { CreateParentDto } from './dto/create-parent.dto';

@Controller('parents')
@UseGuards(JwtAuthGuard)
export class ParentsController {
  constructor(private readonly parentsService: ParentsService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.parentsService.findAll(req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() dto: CreateParentDto) {
    return this.parentsService.create(req.user.schoolId, dto);
  }
}
