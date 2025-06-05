import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Koneksi ke TiDB (ganti sesuai .env Anda)
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 4000, // default TiDB port
    ssl: { rejectUnauthorized: true }, // jika TiDB Anda butuh SSL
    waitForConnections: true,
    connectionLimit: 1,
  });

  // Query user
  const [rows]: any = await pool.query('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
  await pool.end();

  const user = rows[0];
  if (user && bcrypt.compareSync(password, user.password_hash)) {
    return res.status(200).json({ success: true, user: { email: user.email } });
  } else {
    return res.status(401).json({ success: false, message: 'Email atau password salah.' });
  }
}
