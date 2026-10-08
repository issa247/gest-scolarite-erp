import { Body, Controller, Get, Param, Post, Put, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
@UseGuards(JwtAuthGuard)
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.invoicesService.findAll(req.user.schoolId);
  }

  @Get('student/:studentId')
  async findByStudent(@Param('studentId') studentId: string, @Req() req: any) {
    return this.invoicesService.findByStudent(req.user.schoolId, studentId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { studentId: string; total: number; dueDate?: string }) {
    return this.invoicesService.create(req.user.schoolId, {
      ...body,
      dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
    });
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: string, @Req() req: any, @Body() body: { status: string }) {
    return this.invoicesService.updateStatus(id, req.user.schoolId, body.status);
  }
}
