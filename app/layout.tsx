import '@/app/ui/global.css';
import { anek } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Ari Dashboard',
    default: 'Ari Dashboard'
  },
  description: 'The official Next.js Course Dashboard, built with App Router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${anek.className} antialiased`}>{children}</body>
    </html>
  );
}
