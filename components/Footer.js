import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">Haven Partners Korea</div>
          <p>
            헤이븐파트너스코리아<br />
            미국 Haven Group의 한국 자회사<br />
            콘텐츠 투자 · 제작 · 배급
          </p>
        </div>
        <div className="footer-right">
          <p>
            <Link href="/about">회사 소개</Link>
            {' · '}
            <Link href="/board/news">뉴스</Link>
            {' · '}
            <Link href="/board/works">작품</Link>
            {' · '}
            <Link href="/contact">컨택트</Link>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Haven Partners Korea. All rights reserved.
      </div>
    </footer>
  );
}
