import Link from 'next/link';
import { getWorks as fetchWorks } from '@/lib/db';
import { WorkIcon } from '@/components/Icons';

export const revalidate = 0;

async function getWorks() {
  return fetchWorks();
}

export default async function WorksPage() {
  const worksData = await getWorks();

  return (
    <>
      <section className="board-hero">
        <span className="section-label">Board</span>
        <h1 className="section-title" style={{ fontSize: 42 }}>게시판</h1>
      </section>

      <section className="section">
        <div className="board-tabs">
          <Link href="/board/news" className="board-tab">뉴스</Link>
          <Link href="/board/works" className="board-tab active">작품</Link>
        </div>

        <div className="works-grid">
          {worksData.length === 0 && (
            <p style={{ padding: '40px 0', color: 'var(--text-muted)' }}>등록된 작품이 없습니다.</p>
          )}
          {worksData.map((item) => (
            <div className="work-card" key={item.id}>
              <div className="work-thumb">
                <span className="work-thumb-icon">
                  <WorkIcon name={item.icon} size={48} />
                </span>
              </div>
              <div className="work-info">
                <div className="work-genre">{item.genre}</div>
                <div className="work-title">{item.title}</div>
                <div className="work-desc">{item.description}</div>
                <span className="work-status">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
