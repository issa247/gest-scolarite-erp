import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FeesService } from './fees.service';

@Controller('fees')
@UseGuards(JwtAuthGuard)
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.feesService.findAll(req.user.schoolId);
  }

  @Get('active')
  async findActive(@Req() req: any) {
    return this.feesService.findActive(req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { name: string; code: string; amount: number; effectiveAt: string }) {
    return this.feesService.create(req.user.schoolId, {
      ...body,
      effectiveAt: new Date(body.effectiveAt),
    });
  }
}
