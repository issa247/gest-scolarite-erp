import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { SchoolsModule } from './schools/schools.module';
import { UsersModule } from './users/users.module';
import { PermissionsModule } from './permissions/permissions.module';
import { StudentsModule } from './students/students.module';
import { ParentsModule } from './parents/parents.module';
import { AdmissionsModule } from './admissions/admissions.module';
import { PaymentsModule } from './payments/payments.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../.env'],
    }),
    PrismaModule,
    AuthModule,
    SchoolsModule,
    UsersModule,
    PermissionsModule,
    StudentsModule,
    ParentsModule,
    AdmissionsModule,
    PaymentsModule,
    DashboardModule,
  ],
})
export class AppModule {}
