import './globals.css';

export const metadata = {
  title: 'GEST-SCOLARITÉ ERP',
  description: 'ERP scolaire professionnel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
