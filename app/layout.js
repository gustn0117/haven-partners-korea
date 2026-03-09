import './globals.css';
import LayoutShell from '@/components/LayoutShell';

export const metadata = {
  title: 'Haven Partners Korea | 헤이븐파트너스코리아',
  description: '미국 Haven Group의 한국 자회사 - 콘텐츠 투자, 제작, 배급',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
