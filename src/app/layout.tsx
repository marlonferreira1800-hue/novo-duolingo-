import type { Metadata, Viewport } from 'next';
import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';
import '@fontsource/share-tech-mono/400.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Medora — a little medicine, every day',
  description: 'A bilingual medical learning prototype. Protótipo bilíngue para estudar medicina.',
  robots: { index: false, follow: false },
};
export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, viewportFit: 'cover',
  themeColor: '#fffcf0', colorScheme: 'light',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
