import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of allowed routes - ONLY these routes are accessible
const allowedRoutes = ['/', '/work', '/bio']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  console.log(`Middleware: Checking path: ${pathname}`)

  // Allow essential Next.js files and assets
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/assets/') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.includes('.')
  ) {
    console.log(`Middleware: Allowing system path: ${pathname}`)
    return NextResponse.next()
  }

  // Check if the route is in our allowed list
  if (allowedRoutes.includes(pathname)) {
    console.log(`Middleware: Allowing route: ${pathname}`)
    return NextResponse.next()
  }

  // Block all other routes and redirect to home
  console.log(`Middleware: BLOCKING route: ${pathname} - redirecting to /`)
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all paths except system files
     */
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|assets).*)',
  ],
}