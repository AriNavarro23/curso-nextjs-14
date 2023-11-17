import '@/app/ui/global.css';
import { anek } from '@/app/ui/fonts';


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
