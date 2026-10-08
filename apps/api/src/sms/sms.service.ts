import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SmsService {
  constructor(private readonly prisma: PrismaService) {}

  async sendBulk(schoolId: string, recipients: string[], message: string) {
    return {
      schoolId,
      recipients,
      message,
      status: 'queued',
      sentAt: new Date(),
    };
  }

  async getHistory(schoolId: string) {
    return this.prisma.payment.findMany({
      where: { schoolId },
      take: 10,
    });
  }
}
