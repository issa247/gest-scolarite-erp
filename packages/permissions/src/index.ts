export const PERMISSIONS = {
  school: {
    read: 'school.read',
    write: 'school.write',
    delete: 'school.delete',
    manage: 'school.manage',
  },
  students: {
    read: 'students.read',
    create: 'students.create',
    update: 'students.update',
    delete: 'students.delete',
    export: 'students.export',
  },
  fees: {
    read: 'fees.read',
    create: 'fees.create',
    update: 'fees.update',
    delete: 'fees.delete',
    validate: 'fees.validate',
  },
  payments: {
    read: 'payments.read',
    create: 'payments.create',
    update: 'payments.update',
    refund: 'payments.refund',
    validate: 'payments.validate',
  },
} as const;
