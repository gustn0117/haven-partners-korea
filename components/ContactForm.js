'use client';

import { useState } from 'react';

const inquiryTypes = [
  {
    value: '투자 제안',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    value: '프로젝트 제안',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    value: '파트너십 문의',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    value: '기타',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
  },
];

export default function ContactForm() {
  const [selectedType, setSelectedType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row-2col">
        <div className="form-group">
          <label>이름 / 회사명</label>
          <input type="text" placeholder="이름 또는 회사명" />
        </div>
        <div className="form-group">
          <label>이메일</label>
          <input type="email" placeholder="이메일 주소" />
        </div>
      </div>

      <div className="form-group">
        <label>문의 유형</label>
        <div className="inquiry-types">
          {inquiryTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              className={`inquiry-type-btn${selectedType === type.value ? ' inquiry-type-active' : ''}`}
              onClick={() => setSelectedType(type.value)}
            >
              <span className="inquiry-type-icon">{type.icon}</span>
              <span className="inquiry-type-label">{type.value}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>메시지</label>
        <textarea placeholder="문의 내용을 입력하세요" rows={6} />
      </div>

      <button type="submit" className={`btn-submit${submitted ? ' btn-submitted' : ''}`}>
        {submitted ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            전송 완료
          </>
        ) : (
          <>
            문의 보내기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
