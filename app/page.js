import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <Image src="/LOGO.png" alt="Haven Group" width={280} height={70} className="hero-logo" priority />
          <div className="hero-line" />
          <h1 className="hero-title">
            Partners Korea
            <span>콘텐츠 투자 · 제작 · 배급</span>
          </h1>
          <p className="hero-tagline">Backed by Assets. Focused on Content.</p>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="intro-left">
          <span className="section-label">About</span>
          <h2 className="section-title">자산 기반의<br />콘텐츠 투자</h2>
          <div className="divider" />
        </div>
        <div className="intro-right">
          <p>
            헤이븐파트너스코리아는 미국 Haven Group의 한국 자회사로,
            글로벌 실물자산과 재단을 기반으로 한 자체 자본 투자자(Principal Investor)입니다.
          </p>
          <p>
            한국 영화·드라마 콘텐츠의 투자, 제작, 배급을 목표로 설립되었으며,
            외부 펀딩 없이 자체 자산으로 신속하고 명확한 투자를 집행합니다.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="section-inner">
          <span className="section-label">Our Value</span>
          <h2 className="section-title" style={{ color: '#fff' }}>핵심 가치</h2>
          <div className="divider" />
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <div className="value-title">Social Value</div>
              <div className="value-desc">
                문화·교육·의료·공공 목적의 재단 운용으로
                장기 가치와 영향력 중심 투자 지향
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <div className="value-title">Vision</div>
              <div className="value-desc">
                자본력을 바탕으로 영화·드라마의
                투자, 제작, 배급까지 아우르는 콘텐츠 허브
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <div className="value-title">Principal Investor</div>
              <div className="value-desc">
                외부 펀딩 없이 자체 자산으로
                집행하는 신속하고 명확한 투자
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-inner">
          <span className="section-label">Contact</span>
          <h2 className="section-title">프로젝트를 함께 만들어 갑니다</h2>
          <div className="divider" />
          <p className="section-desc">
            제안서 제출 및 파트너십 문의를 환영합니다.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>문의하기</span>
          </Link>
        </div>
      </section>
    </>
  );
}
