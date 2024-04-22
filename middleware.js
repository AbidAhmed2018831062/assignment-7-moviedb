import chainMiddleWare from "./app/middlewares/chainMiddleware";
import internalizationMiddleWare from "./app/middlewares/internalizationMiddleWare";
import redirectHomeMiddleware from "./app/middlewares/redirectHomeMiddleWare";
export default chainMiddleWare([internalizationMiddleWare]);

// import { NextResponse } from 'next/server'
 
// export function middleware(request) {
//  console.log(request.url.pathName);
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
// }

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}