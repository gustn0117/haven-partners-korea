import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

function readJson(filename) {
  const filePath = path.join(dataDir, filename);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return filename === 'settings.json' ? {} : [];
  }
}

function writeJson(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export function getNews() {
  return readJson('news.json');
}

export function getNewsById(id) {
  const news = getNews();
  return news.find((item) => item.id === id) || null;
}

export function addNews(item) {
  const news = getNews();
  const newItem = { id: Date.now().toString(), created_at: new Date().toISOString(), ...item };
  news.unshift(newItem);
  writeJson('news.json', news);
  return newItem;
}

export function updateNews(id, updates) {
  const news = getNews();
  const idx = news.findIndex((item) => item.id === id);
  if (idx === -1) return null;
  news[idx] = { ...news[idx], ...updates };
  writeJson('news.json', news);
  return news[idx];
}

export function deleteNews(id) {
  const news = getNews();
  const filtered = news.filter((item) => item.id !== id);
  writeJson('news.json', filtered);
}

export function getWorks() {
  return readJson('works.json');
}

export function addWork(item) {
  const works = getWorks();
  const newItem = { id: Date.now().toString(), created_at: new Date().toISOString(), ...item };
  works.unshift(newItem);
  writeJson('works.json', works);
  return newItem;
}

export function updateWork(id, updates) {
  const works = getWorks();
  const idx = works.findIndex((item) => item.id === id);
  if (idx === -1) return null;
  works[idx] = { ...works[idx], ...updates };
  writeJson('works.json', works);
  return works[idx];
}

export function deleteWork(id) {
  const works = getWorks();
  const filtered = works.filter((item) => item.id !== id);
  writeJson('works.json', filtered);
}

export function getSettings() {
  return readJson('settings.json');
}

export function updateSettings(updates) {
  const settings = getSettings();
  Object.assign(settings, updates);
  writeJson('settings.json', settings);
  return settings;
}
