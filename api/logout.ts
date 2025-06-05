export default function handler(req: any, res: any) {
  res.setHeader('Set-Cookie', 'token=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict; Secure');
  res.status(200).json({ success: true });
}
