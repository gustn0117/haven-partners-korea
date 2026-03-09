import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <Logo size={100} color="#c5a55a" />
          <h1 className="hero-title">
            Haven Partners<br />Korea
          </h1>
          <p className="hero-subtitle">콘텐츠 투자 · 제작 · 배급</p>
          <p className="hero-tagline">Backed by Assets. Focused on Content.</p>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <span className="section-label">About</span>
        <h2 className="section-title">자산 기반의 콘텐츠 투자</h2>
        <div className="divider" />
        <p className="section-desc">
          헤이븐파트너스코리아는 미국 Haven Group의 한국 자회사로,
          글로벌 실물자산과 재단을 기반으로 한 자체 자본 투자자(Principal Investor)입니다.
          한국 영화·드라마 콘텐츠의 투자, 제작, 배급을 목표로 설립되었습니다.
        </p>
      </section>

      {/* VISION CARDS */}
      <section className="section-dark">
        <div className="section-inner">
          <span className="section-label">Our Value</span>
          <h2 className="section-title" style={{ color: '#fff' }}>핵심 가치</h2>
          <div className="divider" />
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <div className="value-title">Social Value</div>
              <div className="value-desc">
                문화·교육·의료·공공 목적의 재단 운용으로<br />
                장기 가치와 영향력 중심 투자 지향
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <div className="value-title">Vision</div>
              <div className="value-desc">
                자본력을 바탕으로 영화·드라마의<br />
                투자, 제작, 배급까지 아우르는 콘텐츠 허브
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <div className="value-title">Principal Investor</div>
              <div className="value-desc">
                외부 펀딩 없이 자체 자산으로<br />
                집행하는 신속하고 명확한 투자
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <span className="section-label">Contact</span>
        <h2 className="section-title">프로젝트를 함께 만들어 갑니다</h2>
        <div className="divider" style={{ margin: '32px auto' }} />
        <p className="section-desc" style={{ margin: '0 auto 40px' }}>
          제안서 제출 및 파트너십 문의를 환영합니다.
        </p>
        <Link href="/contact" className="btn-submit" style={{ display: 'inline-block', textDecoration: 'none' }}>
          문의하기
        </Link>
      </section>
    </>
  );
}
