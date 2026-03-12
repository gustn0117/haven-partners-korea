'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo-link">
          <Image src="/logo-h.png" alt="Haven Group" width={40} height={32} className="logo-icon" />
          <div className="logo-text-wrap">
            <span className="logo-text">Haven Partners</span>
            <span className="logo-sub">Korea</span>
          </div>
        </Link>
        <nav>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <div className="nav-dropdown">
            <Link href="/board/news" className={pathname.startsWith('/board') ? 'active' : ''}>
              Board
            </Link>
            <div className="nav-dropdown-menu">
              <Link href="/board/news">News</Link>
              <Link href="/board/works">Works</Link>
            </div>
          </div>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
