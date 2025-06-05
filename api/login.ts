export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Dummy login, ganti dengan query ke database jika perlu
  if (email === 'admin@project.com' && password === 'password') {
    // Di serverless, session tradisional tidak bisa, pakai JWT atau cookie custom
    return res.status(200).json({ success: true, user: { email } });
  } else {
    return res.status(401).json({ success: false, message: 'Email atau password salah.' });
  }
}
