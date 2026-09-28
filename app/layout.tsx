import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Command Deck CQB Academy (2012 - 2020) | Memorial & Nostalgia Archive',
  description: 'Historical archive and tribute to the Command Deck CQB Laser Tag Academy at the Provo Towne Centre in Provo, Utah.',
  icons: {
    icon: '/images/cdww-630x175.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-deck-950 text-slate-100 min-h-screen flex flex-col selection:bg-tactical-cyan selection:text-deck-950">
        {children}
      </body>
    </html>
  );
}
