import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// INDEX - GET /api/photos
// Like: def index; @photos = Photo.all; end
export async function GET() {
  const photos = await prisma.photo.findMany();  // Photo.all
  return NextResponse.json(photos);
}

// CREATE - POST /api/photos
// Like: def create; @photo = Photo.create(params); end
export async function POST(request: Request) {
  const data = await request.json(); //like params in rails

  const photo = await prisma.photo.create({
    data: {
      name: data.name,
      url: data.url,
      width:data.width,
      height: data.height,
    },
  });

  return NextResponse.json(photo, { status: 201 });
}