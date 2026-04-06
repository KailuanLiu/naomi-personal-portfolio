import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const education = await prisma.education.findMany({
      orderBy: { startYear: 'desc' },
    });

    return NextResponse.json({ education });
  } catch (error) {
    console.error('GET /api/education error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch education' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const education = body.education;

    if (!Array.isArray(education)) {
      return NextResponse.json(
        { error: 'Education must be an array' },
        { status: 400 }
      );
    }

    await prisma.$transaction([
      prisma.education.deleteMany(),
      prisma.education.createMany({
        data: education.map((item: any) => ({
          school: item.school ?? '',
          degree: item.degree ?? '',
          major: item.major ?? '',
          concentration: item.concentration ?? '',
          startYear: Number(item.startYear) || new Date().getFullYear(),
          endYear: Number(item.endYear) || new Date().getFullYear(),
          description: item.description ?? '',
        })),
      }),
    ]);

    const updatedEducation = await prisma.education.findMany({
      orderBy: { startYear: 'desc' },
    });

    return NextResponse.json({
      message: 'Education updated successfully',
      education: updatedEducation,
    });
  } catch (error) {
    console.error('POST /api/education error:', error);
    return NextResponse.json(
      { error: 'Failed to save education' },
      { status: 500 }
    );
  }
}