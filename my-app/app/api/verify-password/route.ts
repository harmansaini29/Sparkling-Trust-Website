import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    
    // Check against the environment variable
    const validPassword = process.env.UPLOAD_PASSWORD;
    
    if (password === validPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Incorrect password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
