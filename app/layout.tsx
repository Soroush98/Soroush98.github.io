import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Soroush Portfolio',
  description: 'Portfolio of software developer Soroush showcasing projects, certifications, and publications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
