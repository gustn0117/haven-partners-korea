import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

async function getNews() {
  const { data } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function NewsPage() {
  const newsData = await getNews();

  return (
    <>
      <section className="board-hero">
        <span className="section-label">Board</span>
        <h1 className="section-title" style={{ fontSize: 42 }}>게시판</h1>
      </section>

      <section className="section">
        <div className="board-tabs">
          <Link href="/board/news" className="board-tab active">뉴스</Link>
          <Link href="/board/works" className="board-tab">작품</Link>
        </div>

        <div className="news-list">
          {newsData.length === 0 && (
            <p style={{ padding: '40px 0', color: 'var(--text-muted)', textAlign: 'center' }}>등록된 뉴스가 없습니다.</p>
          )}
          {newsData.map((item) => (
            <div className="news-item" key={item.id}>
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
