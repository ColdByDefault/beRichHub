import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from 'next/server';

export default withAuth(
  async function middleware(req: NextRequest) {
    // optional: logging or analytics here
  },
  {
    isReturnToCurrentPage: true,
  }
);

export const config = {
  matcher: [
    // Matches all routes except:
    // - _next
    // - static files
    // - public legal routes
    '/((?!_next|favicon.ico|cookies|impressum|privacy-policy|terms|$|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ]
};
