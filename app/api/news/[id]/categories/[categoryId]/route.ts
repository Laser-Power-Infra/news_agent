import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; categoryId: string }> }
) {
  try {
    const { id, categoryId } = await params
    await prisma.news_category_mapping.delete({
      where: {
        news_id_category_id: {
          news_id: parseInt(id),
          category_id: parseInt(categoryId),
        },
      },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to remove category:', error)
    return NextResponse.json({ error: 'Failed to remove category' }, { status: 500 })
  }
}
