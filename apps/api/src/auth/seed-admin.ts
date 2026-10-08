import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaService) {}

  async seedAdmin() {
    const school = await this.prisma.school.upsert({
      where: { id: 'school-demo' },
      update: {},
      create: {
        id: 'school-demo',
        name: 'École de l’Excellence',
        shortName: 'EEX',
        countryCode: 'CI',
        currency: 'XOF',
        timezone: 'Africa/Abidjan',
      },
    });

    const existing = await this.prisma.user.findFirst({
      where: { schoolId: school.id, email: 'admin@gest-scolarite.ci' },
    });

    if (!existing) {
      const passwordHash = await hash('Admin@123', 12);

      await this.prisma.user.create({
        data: {
          schoolId: school.id,
          email: 'admin@gest-scolarite.ci',
          passwordHash,
          firstName: 'Super',
          lastName: 'Administrateur',
          phone: '+2250102030405',
        },
      });
    }
  }
}
