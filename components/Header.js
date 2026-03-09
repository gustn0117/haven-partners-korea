'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo-link">
          <Logo size={40} />
          <span className="logo-text">Haven Partners Korea</span>
        </Link>
        <nav>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            회사 소개
          </Link>
          <div className="nav-dropdown">
            <Link
              href="/board/news"
              className={pathname.startsWith('/board') ? 'active' : ''}
            >
              게시판 ▾
            </Link>
            <div className="nav-dropdown-menu">
              <Link href="/board/news">뉴스</Link>
              <Link href="/board/works">작품</Link>
            </div>
          </div>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            컨택트
          </Link>
        </nav>
      </div>
    </header>
  );
}
