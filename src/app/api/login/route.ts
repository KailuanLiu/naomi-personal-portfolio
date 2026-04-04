import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions, SessionData } from '@/lib/session';

export async function POST(req: Request) {
    const { password } = await req.json();

    const session = await getIronSession<SessionData> (await cookies(), sessionOptions);

    if (password === process.env.ADMIN_PASSWORD) {
        session.isLoggedIn = true; 
        await session.save();
        return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false }, { status: 401 });
}