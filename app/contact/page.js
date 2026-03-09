export const metadata = {
  title: '컨택트 | Haven Partners Korea',
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <span className="section-label">Contact</span>
        <h1 className="section-title" style={{ color: '#fff', fontSize: 42 }}>컨택트</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>
          프로젝트 제안 및 파트너십 문의
        </p>
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
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>이름 / 회사명</label>
                <input type="text" placeholder="이름 또는 회사명을 입력하세요" />
              </div>
              <div className="form-group">
                <label>이메일</label>
                <input type="email" placeholder="이메일 주소를 입력하세요" />
              </div>
              <div className="form-group">
                <label>문의 유형</label>
                <select defaultValue="">
                  <option value="" disabled>선택하세요</option>
                  <option>투자 제안</option>
                  <option>프로젝트 제안</option>
                  <option>파트너십 문의</option>
                  <option>기타</option>
                </select>
              </div>
              <div className="form-group">
                <label>메시지</label>
                <textarea placeholder="문의 내용을 입력하세요" />
              </div>
              <button type="submit" className="btn-submit">
                문의 보내기
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
