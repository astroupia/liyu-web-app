import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function verifyAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get('admin-token');

  if (!token) {
    return false;
  }

  try {
    await jwtVerify(
      token.value,
      new TextEncoder().encode(JWT_SECRET)
    );
    return true;
  } catch {
    return false;
  }
}