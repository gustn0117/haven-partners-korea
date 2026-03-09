import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: '컨택트 | Haven Partners Korea',
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <span className="section-label">Contact</span>
        <h1 className="section-title" style={{ fontSize: 42 }}>컨택트</h1>
        <p className="page-hero-desc">프로젝트 제안 및 파트너십 문의</p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div>
            <div className="contact-info-item">
              <h3>Company</h3>
              <p>헤이븐파트너스코리아 (Haven Partners Korea)</p>
            </div>
            <div className="contact-info-item">
              <h3>Parent Company</h3>
              <p>Haven Group (미국)</p>
            </div>
            <div className="contact-info-item">
              <h3>Business</h3>
              <p>한국 영화·드라마 콘텐츠 투자, 제작, 배급</p>
            </div>
            <div className="contact-info-item">
              <h3>Email</h3>
              <p>contact@havenpartnerskorea.com</p>
            </div>
            <div className="contact-info-item">
              <h3>제안서 제출 안내</h3>
              <p>
                시나리오 또는 기획안, 제작비 규모 및 자금 조달 구조,
                제작 일정 및 목표 개봉(방영)시점, 확보 요소(감독, 배우, 제작사 등),
                투자금 사용 목적 및 파트너 역할을 포함해 주세요.
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
