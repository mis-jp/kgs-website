import pg from 'pg';
import bcrypt from 'bcryptjs';

const password = process.env.SUPABASE_DB_PASSWORD || 'SUPABASEpa$$2026';
const host = process.env.SUPABASE_DB_HOST || 'aws-0-ap-southeast-2.pooler.supabase.com';
const port = Number(process.env.SUPABASE_DB_PORT || 6543);
const user = process.env.SUPABASE_DB_USER || 'postgres.igbbkjabhbfedaypvpjh';

const pool = new pg.Pool({
  host,
  port,
  user,
  password,
  database: process.env.SUPABASE_DB_NAME || 'postgres',
  ssl: { rejectUnauthorized: false },
  max: 1,
  connectionTimeoutMillis: 20000,
});

async function main() {
  const client = await pool.connect();
  try {
    await client.query(`
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(255) NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  first_name VARCHAR(150) NULL,
  last_name VARCHAR(150) NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  country_code VARCHAR(20) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  inquiry_type VARCHAR(100) NOT NULL DEFAULT 'general',
  product_name VARCHAR(255) NULL,
  page_source VARCHAR(255) NULL,
  page_url TEXT NULL,
  reply_token VARCHAR(64) NULL UNIQUE,
  status VARCHAR(20) NOT NULL DEFAULT 'new'
    CHECK (status IN ('new','read','replied','archived')),
  unread_for_admin SMALLINT NOT NULL DEFAULT 1,
  last_message_at TIMESTAMPTZ NULL,
  last_outbound_message_id VARCHAR(255) NULL,
  admin_reply TEXT NULL,
  replied_at TIMESTAMPTZ NULL,
  replied_by INT NULL REFERENCES admin_users(id) ON DELETE SET NULL,
  export_batch INT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON inquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_unread ON inquiries(unread_for_admin);

CREATE TABLE IF NOT EXISTS inquiry_messages (
  id SERIAL PRIMARY KEY,
  inquiry_id INT NOT NULL REFERENCES inquiries(id) ON DELETE CASCADE,
  sender_type VARCHAR(20) NOT NULL CHECK (sender_type IN ('visitor','admin')),
  sender_name VARCHAR(255) NULL,
  body TEXT NOT NULL,
  email_message_id VARCHAR(255) NULL UNIQUE,
  source VARCHAR(32) NOT NULL DEFAULT 'web',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_inquiry_messages_inquiry_created
  ON inquiry_messages(inquiry_id, created_at);

CREATE TABLE IF NOT EXISTS inquiry_export_log (
  id SERIAL PRIMARY KEY,
  batch_number INT NOT NULL,
  inquiry_count INT NOT NULL,
  exported_by INT NULL REFERENCES admin_users(id) ON DELETE SET NULL,
  file_name VARCHAR(255) NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_inquiries_updated_at ON inquiries;
CREATE TRIGGER trg_inquiries_updated_at
BEFORE UPDATE ON inquiries
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiry_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiry_export_log ENABLE ROW LEVEL SECURITY;
`);

    const hash = await bcrypt.hash('#Kelin2026', 10);
    await client.query(
      `INSERT INTO admin_users (username, password_hash, email)
       VALUES ($1, $2, $3)
       ON CONFLICT (username) DO UPDATE
         SET password_hash = EXCLUDED.password_hash,
             email = EXCLUDED.email`,
      ['admin', hash, 'johnpaulpolendey22@gmail.com']
    );

    const tables = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_name IN ('admin_users','inquiries','inquiry_messages','inquiry_export_log')
      ORDER BY table_name
    `);
    console.log('SUPABASE_SCHEMA_OK:', tables.rows.map((r) => r.table_name).join(', '));
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error('FAIL', err.message);
  process.exit(1);
});
