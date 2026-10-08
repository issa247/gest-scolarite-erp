import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReceiptsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPaymentReceipt(paymentId: string, schoolId: string) {
    const payment = await this.prisma.payment.findFirst({
      where: { id: paymentId, schoolId },
      include: { student: true, school: true },
    });

    if (!payment) return null;

    return {
      id: payment.id,
      reference: payment.reference,
      school: payment.school,
      student: payment.student,
      amount: payment.amount,
      method: payment.method,
      paidAt: payment.paidAt,
      createdAt: payment.createdAt,
    };
  }

  async generatePDF(paymentId: string, schoolId: string) {
    const receipt = await this.getPaymentReceipt(paymentId, schoolId);
    if (!receipt) return null;

    return {
      ...receipt,
      htmlContent: this.renderReceiptHTML(receipt),
    };
  }

  private renderReceiptHTML(receipt: any): string {
    return `
      <html>
        <head>
          <title>Reçu ${receipt.reference}</title>
          <style>
            body { font-family: Arial; margin: 20px; }
            .header { text-align: center; margin-bottom: 20px; }
            .details { margin-bottom: 20px; }
            .footer { margin-top: 30px; border-top: 1px solid #ddd; padding-top: 10px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>${receipt.school.name}</h2>
            <p>Reçu de paiement</p>
          </div>
          <div class="details">
            <p><strong>Référence:</strong> ${receipt.reference}</p>
            <p><strong>Élève:</strong> ${receipt.student.firstName} ${receipt.student.lastName}</p>
            <p><strong>Montant:</strong> ${receipt.amount} ${receipt.school.currency}</p>
            <p><strong>Méthode de paiement:</strong> ${receipt.method}</p>
            <p><strong>Date:</strong> ${new Date(receipt.paidAt).toLocaleDateString('fr-CI')}</p>
          </div>
          <div class="footer">
            <p>Merci pour votre paiement.</p>
          </div>
        </body>
      </html>
    `;
  }
}
