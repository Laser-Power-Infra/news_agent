import prisma from '@/lib/prisma'

const STALE_AFTER_MS = 24 * 60 * 60 * 1000

export const dynamic = 'force-dynamic'

export async function GET() {
  const headers = { 'Access-Control-Allow-Origin': '*' }
  const base = { uptime: process.uptime(), timestamp: new Date().toISOString() }

  try {
    const { _max } = await prisma.scraped_news.aggregate({ _max: { created_at: true } })
    const lastSync = _max.created_at ?? null
    const stale = !lastSync || Date.now() - lastSync.getTime() > STALE_AFTER_MS
    return Response.json(
      { status: stale ? 'stale' : 'ok', stale, lastSync: lastSync?.toISOString() ?? null, db: 'ok', ...base },
      { headers }
    )
  } catch (error) {
    console.error('Health check DB error:', error)
    // App is up, but its database is not reachable.
    return Response.json({ status: 'degraded', stale: null, lastSync: null, db: 'down', ...base }, { headers })
  }
}
