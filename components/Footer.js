import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <Image src="/LOGO.png" alt="Haven Group" width={160} height={40} className="footer-logo-img" />
          <p>
            헤이븐파트너스코리아<br />
            미국 Haven Group의 한국 자회사<br />
            콘텐츠 투자 · 제작 · 배급
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
