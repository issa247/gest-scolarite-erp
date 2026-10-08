import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ReceiptsService } from './receipts.service';

@Controller('receipts')
@UseGuards(JwtAuthGuard)
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Get('payment/:paymentId')
  async getReceipt(@Param('paymentId') paymentId: string, @Req() req: any) {
    return this.receiptsService.getPaymentReceipt(paymentId, req.user.schoolId);
  }

  @Get('payment/:paymentId/pdf')
  async getPDF(@Param('paymentId') paymentId: string, @Req() req: any) {
    return this.receiptsService.generatePDF(paymentId, req.user.schoolId);
  }
}
