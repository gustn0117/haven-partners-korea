'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './admin.module.css';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState('news');
  const [news, setNews] = useState([]);
  const [works, setWorks] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({});

  const headers = { 'Content-Type': 'application/json', 'x-admin-password': password };

  const fetchData = useCallback(async () => {
    const [newsRes, worksRes] = await Promise.all([
      fetch('/api/admin/news'),
      fetch('/api/admin/works'),
    ]);
    setNews(await newsRes.json());
    setWorks(await worksRes.json());
  }, []);

  useEffect(() => {
    if (authed) fetchData();
  }, [authed, fetchData]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '1234') {
      setAuthed(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
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
    setEditingItem(null);
    setForm({});
    fetchData();
  };

  const startEdit = (item) => {
    setEditingItem(item);
    if (tab === 'news') {
      setForm({ date: item.date, title: item.title, category: item.category });
    } else {
      setForm({ genre: item.genre, title: item.title, description: item.description, status: item.status, icon: item.icon });
    }
  };

  const startNew = () => {
    setEditingItem(null);
    if (tab === 'news') {
      const today = new Date().toISOString().slice(0, 10).replace(/-/g, '.');
      setForm({ date: today, title: '', category: '공지' });
    } else {
      setForm({ genre: 'FILM', title: '', description: '', status: '검토 중', icon: 'film' });
    }
  };

  if (!authed) {
    return (
      <div className={styles.loginWrap}>
        <form onSubmit={handleLogin} className={styles.loginBox}>
          <h1 className={styles.loginTitle}>관리자 로그인</h1>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            autoFocus
          />
          <button type="submit" className={styles.btnPrimary}>로그인</button>
        </form>
      </div>
    );
  }

  const data = tab === 'news' ? news : works;
  const showForm = editingItem !== null || Object.keys(form).length > 0;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h1 className={styles.title}>관리자</h1>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${tab === 'news' ? styles.tabActive : ''}`} onClick={() => { setTab('news'); setForm({}); setEditingItem(null); }}>뉴스</button>
          <button className={`${styles.tab} ${tab === 'works' ? styles.tabActive : ''}`} onClick={() => { setTab('works'); setForm({}); setEditingItem(null); }}>작품</button>
        </div>
        <button className={styles.btnAdd} onClick={startNew}>+ 추가</button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h3 className={styles.formTitle}>{editingItem ? '수정' : '추가'}</h3>
          {tab === 'news' ? (
            <>
              <div className={styles.formRow}>
                <label>날짜</label>
                <input className={styles.input} value={form.date || ''} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
              </div>
              <div className={styles.formRow}>
                <label>제목</label>
                <input className={styles.input} value={form.title || ''} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div className={styles.formRow}>
                <label>카테고리</label>
                <select className={styles.input} value={form.category || '공지'} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                  <option>공지</option>
                  <option>투자</option>
                  <option>모회사</option>
                  <option>전략</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div className={styles.formRow}>
                <label>장르</label>
                <select className={styles.input} value={form.genre || 'FILM'} onChange={(e) => setForm({ ...form, genre: e.target.value })}>
                  <option>FILM</option>
                  <option>DRAMA</option>
                </select>
              </div>
              <div className={styles.formRow}>
                <label>제목</label>
                <input className={styles.input} value={form.title || ''} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div className={styles.formRow}>
                <label>설명</label>
                <input className={styles.input} value={form.description || ''} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
              </div>
              <div className={styles.formRow}>
                <label>상태</label>
                <input className={styles.input} value={form.status || ''} onChange={(e) => setForm({ ...form, status: e.target.value })} required />
              </div>
              <div className={styles.formRow}>
                <label>아이콘</label>
                <select className={styles.input} value={form.icon || 'film'} onChange={(e) => setForm({ ...form, icon: e.target.value })}>
                  <option value="film">Film</option>
                  <option value="tv">TV</option>
                  <option value="clapperboard">Clapperboard</option>
                </select>
              </div>
            </>
          )}
          <div className={styles.formActions}>
            <button type="submit" className={styles.btnPrimary}>{editingItem ? '수정' : '추가'}</button>
            <button type="button" className={styles.btnCancel} onClick={() => { setForm({}); setEditingItem(null); }}>취소</button>
          </div>
        </form>
      )}

      <div className={styles.list}>
        {data.length === 0 && <p className={styles.empty}>데이터가 없습니다.</p>}
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
    </div>
  );
}
