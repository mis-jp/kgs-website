import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { query } from '../src/lib/db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env');

for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eq = trimmed.indexOf('=');
  if (eq < 0) continue;
  const key = trimmed.slice(0, eq).trim();
  let value = trimmed.slice(eq + 1).trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }
  if (process.env[key] === undefined) process.env[key] = value;
}

const email = process.argv[2] || 'johnpaulpolendey22@gmail.com';

const before = await query('SELECT id, username, email FROM admin_users ORDER BY id');
console.log('BEFORE', before);

await query('UPDATE admin_users SET email = ?', [email]);

const after = await query('SELECT id, username, email FROM admin_users ORDER BY id');
console.log('AFTER', after);
process.exit(0);
