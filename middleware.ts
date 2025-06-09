import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
import { NextRequest } from 'next/server'


export default withAuth(
  async function middleware(req: NextRequest) {
  },
  {
    // Middleware still runs on all routes, but doesn't protect the blog route
    publicPaths: ["/legals/cookies", "/legals/privacy-policy", "/legals/terms", "/"],
    isReturnToCurrentPage: true,
  }
);
export const config = {
  matcher: [
    // Run on everything but Next internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ]
}
