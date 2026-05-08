import { NextResponse } from 'next/server';

// Fallback hardcoded password — env var takes priority when set
const FALLBACK_PASSWORD = "sparkleadmin2026";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Use env var if available, otherwise use fallback
    const validPassword = process.env.UPLOAD_PASSWORD || FALLBACK_PASSWORD;

    if (password === validPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
