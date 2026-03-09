'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const newsData = [
  { date: '2026.03.09', title: '헤이븐파트너스코리아, 콘텐츠 투자 본격 개시', category: '공지' },
  { date: '2026.03.05', title: '2027년 개봉 목표 영화 프로젝트 검토 착수', category: '투자' },
  { date: '2026.02.28', title: 'Haven Group, 미국 내 랜드마크 건물 포트폴리오 확대', category: '모회사' },
  { date: '2026.02.15', title: '한국 드라마 시장 투자 전략 수립 완료', category: '전략' },
  { date: '2026.01.20', title: '헤이븐파트너스코리아 법인 설립 완료', category: '공지' },
];

export default function NewsPage() {
  const pathname = usePathname();

  return (
    <>
      <section className="board-hero">
        <span className="section-label">Board</span>
        <h1 className="section-title" style={{ fontSize: 42 }}>게시판</h1>
      </section>

      <section className="section">
        <div className="board-tabs">
          <Link href="/board/news" className={`board-tab ${pathname === '/board/news' ? 'active' : ''}`}>
            뉴스
          </Link>
          <Link href="/board/works" className={`board-tab ${pathname === '/board/works' ? 'active' : ''}`}>
            작품
          </Link>
        </div>

        <div className="news-list">
          {newsData.map((item, i) => (
            <div className="news-item" key={i}>
              <span className="news-date">{item.date}</span>
              <span className="news-title">{item.title}</span>
              <span className="news-category">{item.category}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
