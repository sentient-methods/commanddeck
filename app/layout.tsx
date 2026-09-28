import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Command Deck | Close Quarters Battle Laser Tag (Provo Towne Centre)',
  description:
    'Command Deck CQB Academy: Family-friendly tactical laser tag arena formerly located at Provo Towne Centre below Cinemark 16 in Provo, Utah. Small private groups, live referee coaching, and zero strangers.',
  icons: {
    icon: '/images/MB_Seal.JPG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 min-h-screen flex flex-col selection:bg-sky-100 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
