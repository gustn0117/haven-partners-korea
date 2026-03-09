import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Haven Partners Korea | 헤이븐파트너스코리아',
  description: '미국 Haven Group의 한국 자회사 - 콘텐츠 투자, 제작, 배급',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
