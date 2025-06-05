import jwt from 'jsonwebtoken';

export default function handler(req: any, res: any) {
  const cookie = req.headers.cookie || '';
  const token = cookie.split('; ').find(c => c.startsWith('token='))?.split('=')[1];
  if (!token) return res.status(401).json({ loggedIn: false });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    res.status(200).json({ loggedIn: true, user });
  } catch {
    res.status(401).json({ loggedIn: false });
  }
}
