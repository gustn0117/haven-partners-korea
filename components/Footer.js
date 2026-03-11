import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-nav">
          <Link href="/about">About</Link>
          <Link href="/board/news">News</Link>
          <Link href="/board/works">Works</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-group-area">
        <Image src="/logo-dark.png" alt="Haven Group" width={160} height={55} className="footer-logo-img" />
        <div className="footer-group-line" />
        <Image src="/logo-h.png" alt="H" width={32} height={26} className="footer-h-symbol" />
        <div className="footer-group-line" />
        <div className="footer-affiliates">
          <span>Haven Bridge</span>
          <span className="footer-aff-dot" />
          <span>Haven Partners Korea</span>
          <span className="footer-aff-dot" />
          <span>Haven Foundation</span>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 Haven Partners Korea. All rights reserved.
      </div>
    </footer>
  );
}
