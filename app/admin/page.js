'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './admin.module.css';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [tab, setTab] = useState('news');
  const [news, setNews] = useState([]);
  const [works, setWorks] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [settings, setSettings] = useState({ email: '', phone: '', address: '' });
  const [settingsSaved, setSettingsSaved] = useState(false);

  const headers = { 'Content-Type': 'application/json', 'x-admin-password': password };

  const fetchData = useCallback(async () => {
    const [newsRes, worksRes, settingsRes] = await Promise.all([
      fetch('/api/admin/news'),
      fetch('/api/admin/works'),
      fetch('/api/admin/settings'),
    ]);
    setNews(await newsRes.json());
    setWorks(await worksRes.json());
    const s = await settingsRes.json();
    setSettings({ email: s.email || '', phone: s.phone || '', address: s.address || '' });
  }, []);

  useEffect(() => {
    if (authed) fetchData();
  }, [authed, fetchData]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1234') {
      setAuthed(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleDelete = async (type, id) => {
    if (!confirm('삭제하시겠습니까?')) return;
    await fetch(`/api/admin/${type}`, { method: 'DELETE', headers, body: JSON.stringify({ id }) });
    fetchData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const type = tab;
    if (editingItem) {
      await fetch(`/api/admin/${type}`, { method: 'PUT', headers, body: JSON.stringify({ id: editingItem.id, ...form }) });
    } else {
      await fetch(`/api/admin/${type}`, { method: 'POST', headers, body: JSON.stringify(form) });
    }
    closeForm();
    fetchData();
  };

  const startEdit = (item) => {
    setEditingItem(item);
    if (tab === 'news') {
      setForm({ date: item.date, title: item.title, category: item.category, content: item.content || '' });
    } else {
      setForm({ genre: item.genre, title: item.title, description: item.description, status: item.status, icon: item.icon });
    }
    setShowForm(true);
  };

  const startNew = () => {
    setEditingItem(null);
    if (tab === 'news') {
      const today = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
      setForm({ date: today, title: '', category: '공지', content: '' });
    } else {
      setForm({ genre: 'FILM', title: '', description: '', status: '검토 중', icon: 'film' });
    }
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingItem(null);
    setForm({});
  };

  const handleSettingsSave = async () => {
    await fetch('/api/admin/settings', { method: 'PUT', headers, body: JSON.stringify(settings) });
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 2000);
  };

  if (!authed) {
    return (
      <div className={styles.loginWrap}>
        <form onSubmit={handleLogin} className={styles.loginBox}>
          <div className={styles.loginLogo}>H</div>
          <h1 className={styles.loginTitle}>Admin</h1>
          <p className={styles.loginSub}>Haven Partners Korea</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setLoginError(false); }}
            className={styles.loginInput}
            autoFocus
          />
          <button type="submit" className={styles.loginBtn}>로그인</button>
          {loginError && <p className={styles.loginError}>비밀번호가 틀렸습니다</p>}
        </form>
      </div>
    );
  }

  const data = tab === 'news' ? news : works;

  return (
    <div className={styles.wrap}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <div className={styles.titleIcon}>H</div>
          <h1 className={styles.title}>관리자</h1>
        </div>
        <div className={styles.spacer} />
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${tab === 'news' ? styles.tabActive : ''}`} onClick={() => { setTab('news'); closeForm(); }}>뉴스</button>
          <button className={`${styles.tab} ${tab === 'works' ? styles.tabActive : ''}`} onClick={() => { setTab('works'); closeForm(); }}>작품</button>
          <button className={`${styles.tab} ${tab === 'settings' ? styles.tabActive : ''}`} onClick={() => { setTab('settings'); closeForm(); }}>설정</button>
        </div>
        {tab !== 'settings' && (
          <button className={styles.btnAdd} onClick={startNew}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="7" y1="2" x2="7" y2="12"/><line x1="2" y1="7" x2="12" y2="7"/></svg>
            추가
          </button>
        )}
      </div>

      {/* Stats */}
      {tab !== 'settings' && (
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>전체</div>
            <div className={styles.statValue}>{news.length + works.length}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>뉴스</div>
            <div className={styles.statValue}>{news.length}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>작품</div>
            <div className={styles.statValue}>{works.length}</div>
          </div>
        </div>
      )}

      {/* Settings */}
      {tab === 'settings' && (
        <div className={styles.settingsWrap}>
          <div className={styles.settingsCard}>
            <h3 className={styles.settingsTitle}>연락처 정보</h3>
            <p className={styles.settingsDesc}>Contact 페이지에 표시되는 정보를 관리합니다.</p>
            <div className={styles.settingsGrid}>
              <div className={styles.formRow}>
                <label>이메일</label>
                <input className={styles.input} value={settings.email} onChange={(e) => setSettings({ ...settings, email: e.target.value })} placeholder="contact@havepk.com" />
              </div>
              <div className={styles.formRow}>
                <label>전화번호</label>
                <input className={styles.input} value={settings.phone} onChange={(e) => setSettings({ ...settings, phone: e.target.value })} placeholder="02-1234-5678" />
              </div>
              <div className={styles.formRow} style={{ gridColumn: '1 / -1' }}>
                <label>주소</label>
                <input className={styles.input} value={settings.address} onChange={(e) => setSettings({ ...settings, address: e.target.value })} placeholder="서울특별시 강남구..." />
              </div>
            </div>
            <div className={styles.settingsActions}>
              {settingsSaved && <span className={styles.settingsSaved}>저장되었습니다</span>}
              <button className={styles.btnPrimary} onClick={handleSettingsSave}>저장</button>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      {tab !== 'settings' && <div className={styles.listWrap}>
        <div className={styles.listHeader}>
          {tab === 'news' ? (
            <>
              <span className={styles.listHeaderDate}>날짜</span>
              <span className={styles.listHeaderTitle}>제목</span>
              <span className={styles.listHeaderBadge}>카테고리</span>
              <span className={styles.listHeaderActions} />
            </>
          ) : (
            <>
              <span className={styles.listHeaderBadge}>장르</span>
              <span className={styles.listHeaderTitle}>제목</span>
              <span className={styles.listHeaderBadge}>상태</span>
              <span className={styles.listHeaderActions} />
            </>
          )}
        </div>
        <div className={styles.list}>
          {data.length === 0 && <p className={styles.empty}>등록된 데이터가 없습니다</p>}
          {data.map((item) => (
            <div key={item.id} className={styles.listItem}>
              <div className={styles.listContent}>
                {tab === 'news' ? (
                  <>
                    <span className={styles.listDate}>{item.date}</span>
                    <span className={styles.listTitle}>{item.title}</span>
                    <span className={styles.listBadge}>{item.category}</span>
                  </>
                ) : (
                  <>
                    <span className={styles.listBadge}>{item.genre}</span>
                    <span className={styles.listTitle}>{item.title}</span>
                    <span className={styles.listMeta}>{item.status}</span>
                  </>
                )}
              </div>
              <div className={styles.listActions}>
                <button className={styles.btnIcon} onClick={() => startEdit(item)} title="수정">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M11.5 1.5l3 3L5 14H2v-3L11.5 1.5z"/></svg>
                </button>
                <button className={`${styles.btnIcon} ${styles.btnDanger}`} onClick={() => handleDelete(tab, item.id)} title="삭제">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M2 4h12M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M3 4l1 10a1 1 0 001 1h6a1 1 0 001-1l1-10"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>}

      {/* Form Modal */}
      {showForm && (
        <div className={styles.formOverlay} onClick={(e) => { if (e.target === e.currentTarget) closeForm(); }}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>{editingItem ? '수정' : '새로 추가'}</h3>
              <button type="button" className={styles.formClose} onClick={closeForm}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="2" y1="2" x2="12" y2="12"/><line x1="12" y1="2" x2="2" y2="12"/></svg>
              </button>
            </div>
            {tab === 'news' ? (
              <div className={styles.formGrid}>
                <div className={styles.formRow}>
                  <label>날짜</label>
                  <input className={styles.input} value={form.date || ''} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
                </div>
                <div className={styles.formRow}>
                  <label>카테고리</label>
                  <select className={styles.input} value={form.category || '공지'} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                    <option>공지</option><option>투자</option><option>모회사</option><option>전략</option>
                  </select>
                </div>
                <div className={`${styles.formRow} ${styles.formGridFull}`}>
                  <label>제목</label>
                  <input className={styles.input} value={form.title || ''} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                </div>
                <div className={`${styles.formRow} ${styles.formGridFull}`}>
                  <label>본문</label>
                  <textarea className={styles.textarea} value={form.content || ''} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="뉴스 본문 내용을 입력하세요" rows={6} />
                </div>
              </div>
            ) : (
              <div className={styles.formGrid}>
                <div className={styles.formRow}>
                  <label>장르</label>
                  <select className={styles.input} value={form.genre || 'FILM'} onChange={(e) => setForm({ ...form, genre: e.target.value })}>
                    <option>FILM</option><option>DRAMA</option>
                  </select>
                </div>
                <div className={styles.formRow}>
                  <label>아이콘</label>
                  <select className={styles.input} value={form.icon || 'film'} onChange={(e) => setForm({ ...form, icon: e.target.value })}>
                    <option value="film">Film</option><option value="tv">TV</option><option value="clapperboard">Clapperboard</option>
                  </select>
                </div>
                <div className={`${styles.formRow} ${styles.formGridFull}`}>
                  <label>제목</label>
                  <input className={styles.input} value={form.title || ''} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                </div>
                <div className={`${styles.formRow} ${styles.formGridFull}`}>
                  <label>설명</label>
                  <input className={styles.input} value={form.description || ''} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
                </div>
                <div className={`${styles.formRow} ${styles.formGridFull}`}>
                  <label>상태</label>
                  <input className={styles.input} value={form.status || ''} onChange={(e) => setForm({ ...form, status: e.target.value })} required />
                </div>
              </div>
            )}
            <div className={styles.formActions}>
              <button type="button" className={styles.btnCancel} onClick={closeForm}>취소</button>
              <button type="submit" className={styles.btnPrimary}>{editingItem ? '수정 완료' : '추가하기'}</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
