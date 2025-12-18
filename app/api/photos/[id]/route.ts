import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET( 
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const photo = await prisma.photo.findUnique({
    where: { id: parseInt(id) },  // Photo.find(id)
  });
  
  if (!photo) {
    return NextResponse.json({ error: 'Photo not found' }, { status: 404 });
  }
  
  return NextResponse.json(photo);
}


// UPDATE - PATCH /api/photos/:id
// Like: def update; @photo = Photo.find(params[:id]); @photo.update(params); end
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await request.json();
  
  try {
    const photo = await prisma.photo.update({
      where: { id: parseInt(id) },
      data: {
        name: data.name,
        url: data.url,
        width: data.width,
        height: data.height,
      },
    });
    return NextResponse.json(photo);
  } catch {
    return NextResponse.json({ error: 'Photo not found' }, { status: 404 });
  }
}

// DESTROY - DELETE /api/photos/:id
// Like: def destroy; @photo = Photo.find(params[:id]); @photo.destroy; end
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  try {
    await prisma.photo.delete({
      where: { id: parseInt(id) },
    });
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: 'Photo not found' }, { status: 404 });
  }
}
