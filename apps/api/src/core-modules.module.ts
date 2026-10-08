import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { StudentsModule } from '../students/students.module';
import { ParentsModule } from '../parents/parents.module';
import { ClassesModule } from '../classes/classes.module';
import { FeesModule } from '../fees/fees.module';
import { PaymentsModule } from '../payments/payments.module';
import { InvoicesModule } from '../invoices/invoices.module';
import { ReceiptsModule } from '../receipts/receipts.module';
import { SubjectsModule } from '../subjects/subjects.module';
import { TimetablesModule } from '../timetables/timetables.module';
import { SmsModule } from '../sms/sms.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { ExamsModule } from '../exams/exams.module';
import { ReportsModule } from '../reports/reports.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    StudentsModule,
    ParentsModule,
    ClassesModule,
    FeesModule,
    PaymentsModule,
    InvoicesModule,
    ReceiptsModule,
    SubjectsModule,
    TimetablesModule,
    SmsModule,
    NotificationsModule,
    ExamsModule,
    ReportsModule,
  ],
})
export class CoreModulesModule {}
