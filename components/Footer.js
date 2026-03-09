import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <Image src="/logo-h.png" alt="H" width={36} height={29} className="footer-h-symbol" />
            <Image src="/logo-dark.png" alt="Haven Group" width={180} height={62} className="footer-logo-img" />
          </div>
          <p>
            Haven Partners Korea<br />
            콘텐츠 투자 · 배급
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-nav">
            <Link href="/about">About</Link>
            <Link href="/board/news">News</Link>
            <Link href="/board/works">Works</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-email">contact@havenpartnerskorea.com</div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 Haven Partners Korea. All rights reserved.
      </div>
    </footer>
  );
}
