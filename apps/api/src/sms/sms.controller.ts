import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SmsService } from './sms.service';

@Controller('sms')
@UseGuards(JwtAuthGuard)
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Get('history')
  async getHistory(@Req() req: any) {
    return this.smsService.getHistory(req.user.schoolId);
  }

  @Post('send')
  async sendBulk(@Req() req: any, @Body() body: { recipients: string[]; message: string }) {
    return this.smsService.sendBulk(req.user.schoolId, body.recipients, body.message);
  }
}
