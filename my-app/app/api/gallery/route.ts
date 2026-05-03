import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const jsonPath = path.join(process.cwd(), 'app', 'data', 'gallery.json');
  try {
    const data = await fs.readFile(jsonPath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading gallery JSON:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const size = (formData.get('size') as string) || 'medium';
    const password = formData.get('password') as string;

    // Verify Password securely
    if (password !== process.env.UPLOAD_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized: Invalid password" }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create a safe, unique filename
    const ext = path.extname(file.name) || (file.type.startsWith('video/') ? '.mp4' : '.jpg');
    const baseName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9.-]/g, '');
    const filename = `${Date.now()}-${baseName}${ext}`;
    
    const uploadsDir = path.join(process.cwd(), 'public', 'gallery-uploads');
    
    // Ensure directory exists
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }

    const publicPath = path.join(uploadsDir, filename);
    await fs.writeFile(publicPath, buffer);

    const isVideo = file.type.startsWith('video/');
    
    // Create new gallery item
    const newItem = {
      id: Date.now(),
      type: isVideo ? "video" : "image",
      category: category || "Volunteer Activities",
      title: title || "New Gallery Item",
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      src: `/gallery-uploads/${filename}`,
      size: size
    };

    // Update json file
    const jsonPath = path.join(process.cwd(), 'app', 'data', 'gallery.json');
    let items = [];
    try {
      const data = await fs.readFile(jsonPath, 'utf8');
      items = JSON.parse(data);
    } catch (e) {
      // file might be empty or missing
    }
    
    items.unshift(newItem); // Add new item to the beginning of the array
    await fs.writeFile(jsonPath, JSON.stringify(items, null, 2));

    return NextResponse.json({ success: true, item: newItem });
  } catch (error) {
    console.error("Upload API error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
