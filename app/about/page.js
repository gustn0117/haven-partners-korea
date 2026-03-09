export const metadata = {
  title: '회사 소개 | Haven Partners Korea',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <span className="section-label">About Us</span>
          <h1 className="section-title">Haven Partners Korea</h1>
          <p className="page-hero-desc">자산 기반 콘텐츠 투자의 새로운 파트너</p>
        </div>
      </section>

      <section className="section">
        <div className="about-grid">
          <div>
            <span className="section-label">Company</span>
            <h2 className="section-title">회사 개요</h2>
            <div className="divider" />
            <p className="section-desc">
              헤이븐파트너스코리아(Haven Partners Korea)는 미국 Haven Group의 한국 자회사로,
              글로벌 실물자산과 재단을 기반으로 한 자체 자본 투자자(Principal Investor)입니다.
            </p>
            <p className="section-desc" style={{ marginTop: 16 }}>
              모회사 Haven Group은 미국 내 랜드마크 건물들을 직접 소유·운영하며,
              문화·교육·의료·사회공헌·공공 목적의 재단을 함께 운용하고 있습니다.
            </p>
            <p className="section-desc" style={{ marginTop: 16 }}>
              헤이븐파트너스코리아는 이러한 자산 기반 위에서 한국 영화·드라마 콘텐츠 투자,
              제작, 향후 배급까지를 목표로 설립된 회사입니다.
            </p>
            <p style={{ marginTop: 16, fontSize: 13, color: 'var(--gold)' }}>
              *2026년 3월 집중 투자 개시
            </p>
          </div>
          <div>
            <div className="about-card">
              <h3>Social Value</h3>
              <p>
                문화·교육·의료·공공 목적의 재단 운용으로
                장기 가치와 영향력 중심 투자를 지향합니다.
              </p>
            </div>
            <div className="about-card" style={{ marginTop: 20 }}>
              <h3>Vision</h3>
              <p>
                자본력을 바탕으로 영화·드라마의 투자, 제작,
                배급까지 아우르는 콘텐츠 허브를 구축합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-warm">
        <div className="section-inner">
          <span className="section-label">Investment Strategy</span>
          <h2 className="section-title">투자 전략</h2>
          <div className="divider" />

          <div className="about-grid" style={{ marginTop: 48, gap: 56 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 16, color: 'var(--dark)', fontWeight: 400 }}>Target</h3>
              <p style={{ color: 'var(--text-light)', fontSize: 15, lineHeight: 1.9, fontWeight: 300 }}>
                2027-2028년 개봉 및 방영 목표 영화 또는 드라마
              </p>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginTop: 36, marginBottom: 16, color: 'var(--dark)', fontWeight: 400 }}>Timing</h3>
              <p style={{ color: 'var(--text-light)', fontSize: 15, lineHeight: 1.9, fontWeight: 300 }}>
                2026년 3월 집중 투자 개시
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 20, color: 'var(--dark)', fontWeight: 400 }}>Investment Philosophy</h3>
              <ul className="invest-list">
                <li>단순 재무적 투자(FI)를 넘어 기획·제작 단계부터 공동 설계</li>
                <li>모든 투자는 외부 펀딩 없이 자체 자산으로 집행</li>
                <li>의사결정은 명확하고 신속하게 진행</li>
                <li>프로젝트 별 단독 투자 또는 소규모 핵심 제작 투자 중심</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <span className="section-label">Decision Process</span>
        <h2 className="section-title">의사결정 프로세스</h2>
        <div className="divider" />

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">Step 01</div>
            <div className="step-title">Review</div>
            <div className="step-desc">제안서 및 기획안 검토</div>
          </div>
          <div className="process-step">
            <div className="step-number">Step 02</div>
            <div className="step-title">Meeting</div>
            <div className="step-desc">제작진 미팅 및 프로젝트 논의</div>
          </div>
          <div className="process-step">
            <div className="step-number">Step 03</div>
            <div className="step-title">Decision</div>
            <div className="step-desc">투자 결정 및 계약 진행</div>
          </div>
        </div>

        <div className="about-grid" style={{ marginTop: 64, gap: 56 }}>
          <div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 20, color: 'var(--dark)', fontWeight: 400 }}>Key Strengths</h3>
            <ul className="invest-list">
              <li>불필요한 절차를 배제한 명확한 의사결정 구조</li>
              <li>조건 충족 시 즉각적인 판단 및 실행</li>
              <li>자체 자본 기반의 안정적인 투자 파트너십</li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 20, color: 'var(--dark)', fontWeight: 400 }}>제안서 제출 가이드</h3>
            <ul className="invest-list">
              <li>시나리오 또는 기획안</li>
              <li>제작비 규모 및 자금 조달 구조</li>
              <li>제작 일정 및 목표 개봉(방영)시점</li>
              <li>확보 요소(감독, 배우, 제작사 등)</li>
              <li>투자금 사용 목적 및 파트너 역할</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
