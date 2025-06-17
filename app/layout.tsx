import './globals.css';
import GradientBackground from '@/components/GradientBg/GradientBackground';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata = {
  title: 'Vikas',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen w-full">
        <GradientBackground>
          <div className="content">{children}</div>
        </GradientBackground>
      </body>
    </html>
  );
}
