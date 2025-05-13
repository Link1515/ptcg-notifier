import Database from 'better-sqlite3';

export const db = new Database('data.db');

db.prepare(
  `CREATE TABLE IF NOT EXISTS videos (
    id TEXT PRIMARY KEY, 
    title TEXT, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,
).run();

export function videoNotExists(id) {
  const exists = db.prepare('SELECT 1 FROM videos WHERE id = ?').get(id);
  return !Boolean(exists);
}

export function storeVideo(id, title) {
  db.prepare('INSERT INTO videos (id, title) VALUES (?, ?)').run(id, title);
}
