import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="landing">
      {/* Background layers */}
      <div className="landing-noise" />
      <div className="landing-bg-ring landing-bg-ring-1" />
      <div className="landing-bg-ring landing-bg-ring-2" />
      <div className="landing-bg-ring landing-bg-ring-3" />
      <div className="landing-glow landing-glow-1" />
      <div className="landing-glow landing-glow-2" />
      <div className="landing-glow landing-glow-3" />

      {/* Horizontal accent lines */}
      <div className="landing-h-line landing-h-line-top" />
      <div className="landing-h-line landing-h-line-bottom" />

      {/* Center Content */}
      <div className="landing-center">
        <div className="landing-symbol-wrap">
          <div className="landing-symbol-ring" />
          <Image src="/logo-h.png" alt="Haven Group" width={80} height={65} className="landing-symbol" priority />
        </div>
        <div className="landing-divider">
          <span className="landing-divider-line" />
          <span className="landing-divider-diamond" />
          <span className="landing-divider-line" />
        </div>
        <h1 className="landing-title">Haven Partners Korea</h1>

        <div className="landing-sub-wrap">
          <span className="landing-sub-line" />
          <p className="landing-sub">Global Principal Investment for Film &amp; Television Content</p>
          <span className="landing-sub-line" />
        </div>
      </div>

      {/* Side Navigation */}
      <nav className="landing-nav">
        <Link href="/about" className="landing-nav-link"><span>About</span></Link>
        <Link href="/board/news" className="landing-nav-link"><span>News</span></Link>
        <Link href="/board/works" className="landing-nav-link"><span>Works</span></Link>
        <Link href="/contact" className="landing-nav-link"><span>Contact</span></Link>
      </nav>

      {/* Bottom */}
      <div className="landing-bottom">
        <span>&copy; 2026 Haven Partners Korea</span>
      </div>
    </div>
  );
}
