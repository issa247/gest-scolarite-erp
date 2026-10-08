import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { PaymentsService } from './payments.service';

@Controller('payments')
@UseGuards(JwtAuthGuard)
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.paymentsService.findAll(req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { studentId: string; amount: number; method: string; reference?: string }) {
    return this.paymentsService.create(req.user.schoolId, body);
  }
}
