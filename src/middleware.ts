import { NextRequest, NextResponse } from 'next/server'
import { analytics } from './utils/analytics'
console.log('REDIS_KEY:', process.env.REDIS_KEY); // Log the REDIS_KEY value

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    try {
      analytics.track('pageview', {
        page: '/',
        country: req.geo?.country,
      })
    } catch (err) {
      // fail silently to not affect request
      console.error(err)
    }
  }

  return NextResponse.next()
}

export const matcher = {
  matcher: ['/'],
}
