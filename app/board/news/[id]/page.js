import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

async function getNewsItem(id) {
  const { data } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single();
  return data;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = await getNewsItem(id);
  if (!item) return { title: '뉴스 | Haven Partners Korea' };
  return { title: `${item.title} | Haven Partners Korea` };
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const item = await getNewsItem(id);
  if (!item) notFound();

  return (
    <>
      <section className="board-hero">
        <span className="section-label">News</span>
        <h1 className="section-title" style={{ fontSize: 42 }}>뉴스</h1>
      </section>

      <section className="section">
        <article className="news-detail">
          <div className="news-detail-header">
            <span className="news-category">{item.category}</span>
            <span className="news-detail-date">{item.date}</span>
          </div>
          <h2 className="news-detail-title">{item.title}</h2>
          <div className="news-detail-divider" />
          {item.content ? (
            <div className="news-detail-content">
              {item.content.split('\n').map((line, i) => (
                <p key={i}>{line || '\u00A0'}</p>
              ))}
            </div>
          ) : (
            <div className="news-detail-content">
              <p className="news-detail-empty">상세 내용이 아직 등록되지 않았습니다.</p>
            </div>
          )}
          <div className="news-detail-footer">
            <Link href="/board/news" className="news-detail-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              목록으로
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
