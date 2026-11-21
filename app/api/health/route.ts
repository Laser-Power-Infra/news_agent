export const dynamic = 'force-dynamic'

// Liveness only: no DB query, so health probes never wake Neon.
export async function GET() {
  return Response.json(
    { status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  )
}
