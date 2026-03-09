'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const worksData = [
  {
    genre: 'FILM',
    title: '프로젝트 A',
    desc: '2027년 개봉 목표 장편 영화 프로젝트',
    status: '검토 중',
    icon: '🎬',
  },
  {
    genre: 'DRAMA',
    title: '프로젝트 B',
    desc: '2027-2028년 방영 목표 드라마 시리즈',
    status: '기획 단계',
    icon: '📺',
  },
  {
    genre: 'FILM',
    title: '프로젝트 C',
    desc: '장르: 스릴러 / 2028년 개봉 목표',
    status: '제안서 검토',
    icon: '🎞️',
  },
];

export default function WorksPage() {
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

        <div className="works-grid">
          {worksData.map((item, i) => (
            <div className="work-card" key={i}>
              <div className="work-thumb">
                <span className="work-thumb-icon">{item.icon}</span>
              </div>
              <div className="work-info">
                <div className="work-genre">{item.genre}</div>
                <div className="work-title">{item.title}</div>
                <div className="work-desc">{item.desc}</div>
                <span className="work-status">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
