import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, SessionData } from '@/lib/session';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const about = await prisma.about.findUnique({ where: { id: 1 } });
    return NextResponse.json({ content: about?.content ?? '' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { about } = body;

    await prisma.about.upsert({
      where: { id: 1 },
      update: { content: about },
      create: { id: 1, content: about },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating about content:', error);
    return NextResponse.json({ success: false, error: 'Failed to update about me content' }, { status: 500 });
  }
}
