import bcrypt from 'bcryptjs';
import { query } from '../src/lib/db.js';

async function main() {
  const username = 'misadmin';
  const password = '#Kelin2026';
  const email = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'johnpaulpolendey22@gmail.com';
  const hash = await bcrypt.hash(password, 10);

  const rows = await query(
    `INSERT INTO admin_users (username, password_hash, email)
     VALUES (?, ?, ?)
     ON CONFLICT (username) DO UPDATE
       SET password_hash = EXCLUDED.password_hash,
           email = EXCLUDED.email
     RETURNING id, username, email`,
    [username, hash, email]
  );

  console.log('ADMIN_OK', {
    id: rows[0]?.id ?? rows.insertId,
    username: rows[0]?.username,
    email: rows[0]?.email,
  });
}

main().catch((err) => {
  console.error('FAIL', err.message);
  process.exit(1);
});
