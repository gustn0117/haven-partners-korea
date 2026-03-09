'use client';

export default function ContactForm() {
  return (
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
  );
}
