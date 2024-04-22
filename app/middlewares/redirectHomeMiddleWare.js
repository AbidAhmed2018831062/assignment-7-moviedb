
import { NextResponse } from "next/server";
let defaultLocale = "en";
let locales = ["en", "bn"];

export default function redirectHomeMiddleware(middleware){
return async(request,event)=>{

 let response;
 const pathname=request.nextUrl.pathname;
   const pathNameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}`) &&
            !pathname.startsWith(`/${locale}/`)
    );
 if(!pathNameIsMissingLocale){
    const parts=pathname.split("/");
    console.log(locales.includes(parts[parts.length-1]));
    if(locales.includes(parts[parts.length-1]))
     response=NextResponse.redirect(
            new URL(`/${parts[parts.length-1]}/movies`, request.url)
        );
  }
 else
  response = NextResponse.next();
  return middleware(request, event)
}

}