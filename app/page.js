import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="landing">
      {/* Center Content */}
      <div className="landing-center">
        <Image src="/logo-mark.png" alt="Haven Group" width={200} height={112} className="landing-logo" priority />
        <div className="landing-line" />
        <h1 className="landing-title">Haven Partners Korea</h1>
        <p className="landing-sub">콘텐츠 투자 · 제작 · 배급</p>
        <p className="landing-tagline">Backed by Assets. Focused on Content.</p>
      </div>

      {/* Side Navigation */}
      <nav className="landing-nav">
        <Link href="/about" className="landing-nav-link">회사소개</Link>
        <Link href="/board/news" className="landing-nav-link">뉴스</Link>
        <Link href="/board/works" className="landing-nav-link">작품</Link>
        <Link href="/contact" className="landing-nav-link">컨택트</Link>
      </nav>

      {/* Bottom Info */}
      <div className="landing-bottom">
        <span>&copy; 2026 Haven Partners Korea</span>
        <span>contact@havenpartnerskorea.com</span>
      </div>
    </div>
  );
}
