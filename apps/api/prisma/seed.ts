import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const school = await prisma.school.upsert({
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

  const adminEmail = 'admin@gest-scolarite.ci';
  const existing = await prisma.user.findFirst({
    where: { schoolId: school.id, email: adminEmail },
  });

  if (!existing) {
    const passwordHash = await hash('Admin@123', 12);
    await prisma.user.create({
      data: {
        schoolId: school.id,
        email: adminEmail,
        passwordHash,
        firstName: 'Super',
        lastName: 'Administrateur',
        phone: '+2250102030405',
      },
    });
  }

  console.log('Database seeded with demo school and admin account.');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
