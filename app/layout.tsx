import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Soroosh Esmaeilian · ML Engineer · LLMs · RAG',
  description:
    'Machine Learning Engineer building production LLM and RAG systems. MSc, University of Calgary.',
};

// Static export to GitHub Pages can't set HTTP response headers, so the
// Content-Security-Policy is declared as a meta tag. 'unsafe-inline' for
// scripts/styles is required by Next.js' inline runtime and the GA4 snippet.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${inter.variable}`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-H8V6R3M61X" />
    </html>
  );
}
