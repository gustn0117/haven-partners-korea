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
          <p className="page-hero-desc">가장 견고한 토대 위에 세워지는 무한한 상상력</p>
        </div>
      </section>

      {/* About Us */}
      <section className="section">
        <div className="about-intro">
          <div>
            <span className="section-label">Company</span>
            <h2 className="section-title">About Us</h2>
            <div className="divider" />
          </div>
          <div className="about-intro-text">
            <p>
              헤이븐파트너스코리아(Haven Partners Korea)는 미국 Haven Group의 한국 자회사로,
              글로벌 실물 자산과 재단 기반을 바탕으로 자체 자본을 운용하는 Principal Investor입니다.
            </p>
            <p>
              모체인 Haven Group은 미국 내 주요 랜드마크 자산을 보유·운영하며,
              문화·교육·의료·사회공헌 분야의 공익 재단을 함께 운영하고 있습니다.
              이러한 안정적인 자산 기반과 공익적 가치 위에서 헤이븐파트너스코리아는
              한국 시장에서 지속 가능하고 책임 있는 투자를 이어가고자 합니다.
            </p>
            <p>
              헤이븐파트너스코리아는 한국 영화와 드라마 콘텐츠 투자를 중심으로,
              향후 글로벌 배급과 IP 확장까지 연결되는 콘텐츠 생태계 구축을 지향합니다.
            </p>
            <p>
              헤이븐파트너스코리아는 단순한 재무적 파트너를 넘어
              한국의 창의적인 스토리텔링이 글로벌 시장에서 새로운 기준이 될 수 있도록
              전략적 파트너로 함께하겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="section-warm">
        <div className="section-inner">
          <span className="section-label">Investment</span>
          <h2 className="section-title">Investment Focus</h2>
          <div className="divider" />

          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h3>Executive Producer Investment</h3>
              <p>
                영화 및 드라마 프로젝트에 Executive Producer(EP)로 참여하여
                제작비 투자 및 프로젝트 자금 조달을 지원합니다.
                전문 제작사 및 배급사와 협력하여 콘텐츠의 제작과 유통 단계에서
                전략적 자본을 제공합니다.
              </p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h3>IP Acquisition &amp; Remake Rights</h3>
              <p>
                글로벌 확장 가능성이 높은 콘텐츠 IP를 발굴하고
                투자와 함께 해외 리메이크 및 판권 확장 권리 확보를 추진합니다.
              </p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>Global Partnerships</h3>
              <p>
                글로벌 스튜디오, 배급사, 투자 파트너와 협력하여
                한국 콘텐츠의 국제 시장 확장을 위한 협력 구조를 구축합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="section">
        <span className="section-label">Criteria</span>
        <h2 className="section-title">Investment Criteria</h2>
        <div className="divider" />
        <p className="section-desc" style={{ marginBottom: 48 }}>
          헤이븐파트너스코리아는 장기적인 콘텐츠 IP 가치와 글로벌 확장 가능성을 중심으로
          투자 프로젝트를 선별합니다.
        </p>

        <div className="criteria-grid">
          <div className="criteria-item">
            <div className="criteria-number">01</div>
            <h3>Global Storytelling Potential</h3>
            <p>국경과 문화권을 넘어 공감할 수 있는 보편적 스토리와 글로벌 시장에서 확장 가능성이 높은 콘텐츠</p>
          </div>
          <div className="criteria-item">
            <div className="criteria-number">02</div>
            <h3>Strong Creative Team</h3>
            <p>감독, 작가, 제작사 등 검증된 창작진과 제작 역량</p>
          </div>
          <div className="criteria-item">
            <div className="criteria-number">03</div>
            <h3>Scalable IP Value</h3>
            <p>영화, 드라마, 시리즈, 해외 리메이크 등 다양한 형태로 확장 가능한 IP 가치</p>
          </div>
          <div className="criteria-item">
            <div className="criteria-number">04</div>
            <h3>Strategic Distribution Potential</h3>
            <p>국내외 배급 전략과 글로벌 시장 확장 가능성</p>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="section-warm">
        <div className="section-inner">
          <span className="section-label">Submission</span>
          <h2 className="section-title">Submission Guidelines</h2>
          <div className="divider" />
          <p className="section-desc" style={{ marginBottom: 48 }}>
            헤이븐파트너스코리아는 매년 제한된 수의 영화 및 드라마 프로젝트를 검토합니다.
            프로젝트 제안을 위해 아래 자료를 함께 제출해 주시기 바랍니다.
          </p>

          <div className="submission-list">
            <div className="submission-item">
              <div className="submission-number">01</div>
              <div>
                <h4>Script or Project Proposal</h4>
                <p>시나리오 또는 프로젝트 기획안</p>
              </div>
            </div>
            <div className="submission-item">
              <div className="submission-number">02</div>
              <div>
                <h4>Production Budget &amp; Financing Plan</h4>
                <p>예상 제작비 규모 및 전체 자금 조달 구조</p>
              </div>
            </div>
            <div className="submission-item">
              <div className="submission-number">03</div>
              <div>
                <h4>Production Schedule &amp; Target Release</h4>
                <p>제작 일정 및 목표 개봉(또는 방영) 시점</p>
              </div>
            </div>
            <div className="submission-item">
              <div className="submission-number">04</div>
              <div>
                <h4>Attached Elements</h4>
                <p>확보된 주요 요소 (감독, 작가, 배우, 제작사 등)</p>
              </div>
            </div>
            <div className="submission-item">
              <div className="submission-number">05</div>
              <div>
                <h4>Investment Purpose &amp; Partner Structure</h4>
                <p>투자금 사용 목적 및 투자 파트너 역할 구조</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
