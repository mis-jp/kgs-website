import pg from 'pg';

const pool = new pg.Pool({
  host: process.env.SUPABASE_DB_HOST || 'aws-0-ap-southeast-2.pooler.supabase.com',
  port: Number(process.env.SUPABASE_DB_PORT || 6543),
  user: process.env.SUPABASE_DB_USER || 'postgres.igbbkjabhbfedaypvpjh',
  password: process.env.SUPABASE_DB_PASSWORD || 'SUPABASEpa$$2026',
  database: process.env.SUPABASE_DB_NAME || 'postgres',
  ssl: { rejectUnauthorized: false },
  max: 1,
  connectionTimeoutMillis: 20000,
});

const tables = ['admin_users', 'inquiries', 'inquiry_messages', 'inquiry_export_log'];

async function main() {
  const client = await pool.connect();
  try {
    for (const table of tables) {
      await client.query(`ALTER TABLE public.${table} ENABLE ROW LEVEL SECURITY`);
      // Do NOT FORCE RLS — server uses the postgres role (table owner) and must keep access.
      // With RLS on and no policies, anon/authenticated Data API access is blocked.
    }

    const check = await client.query(`
      SELECT c.relname AS table_name, c.relrowsecurity AS rls_enabled, c.relforcerowsecurity AS rls_forced
      FROM pg_class c
      JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE n.nspname = 'public'
        AND c.relname = ANY($1::text[])
      ORDER BY c.relname
    `, [tables]);

    console.log('RLS_OK');
    for (const row of check.rows) {
      console.log(`${row.table_name}: enabled=${row.rls_enabled} forced=${row.rls_forced}`);
    }
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error('FAIL', err.message);
  process.exit(1);
});
