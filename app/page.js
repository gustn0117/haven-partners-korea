import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="landing">
      {/* Center Content */}
      <div className="landing-center">
        <Image src="/logo-h.png" alt="Haven Group" width={80} height={65} className="landing-symbol" priority />
        <div className="landing-line" />
        <h1 className="landing-title">Haven Partners Korea</h1>
        <p className="landing-hero-copy">가장 견고한 토대 위에 세워지는 무한한 상상력</p>
        <p className="landing-sub">Global Principal Investment for Film &amp; Television Content</p>
      </div>

      {/* Side Navigation */}
      <nav className="landing-nav">
        <Link href="/about" className="landing-nav-link">About</Link>
        <Link href="/board/news" className="landing-nav-link">News</Link>
        <Link href="/board/works" className="landing-nav-link">Works</Link>
        <Link href="/contact" className="landing-nav-link">Contact</Link>
      </nav>

      {/* Bottom */}
      <div className="landing-bottom">
        <span>&copy; 2026 Haven Partners Korea</span>
      </div>
    </div>
  );
}
