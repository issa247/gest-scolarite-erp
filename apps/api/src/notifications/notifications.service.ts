import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(schoolId: string, message: string) {
    return {
      schoolId,
      message,
      status: 'created',
      createdAt: new Date(),
    };
  }

  async findAll(schoolId: string) {
    return [{ schoolId, message: 'Bienvenue dans GEST-SCOLARITÉ ERP.', status: 'created' }];
  }
}
