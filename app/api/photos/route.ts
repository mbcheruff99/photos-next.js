import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// INDEX - GET /api/photos
// Like: def index; @photos = Photo.all; end
export async function GET() {
  const photos = await prisma.photo.findMany();  // Photo.all
  return NextResponse.json(photos);
}