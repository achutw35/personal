import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { poppins, playfair } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Achut Prasad Wagle | Software Developer',
  description: 'Personal portfolio website of Achut Prasad Wagle, a software developer specializing in Laravel with Filament package and React with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}