import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let defaultLocale = "en";
let locales = ["en", "bn"];


function getLocale(request) {
    const acceptedLanguage =
        request.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptedLanguage };
    const languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale); // en or bn
}

export default function internalizationMiddleWare(middleware){
return async(request,event)=>{
    const pathname = request.nextUrl.pathname;
    console.log(request.url);
    const pathNameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}`) &&
            !pathname.startsWith(`/${locale}/`)
    );
    let response2;
    if (pathNameIsMissingLocale) {
        // detect user's preference & redirect with a locale with a path eg: /en/about
        const locale = getLocale(request);
         response2=NextResponse.redirect(
            new URL(`/${locale}/${pathname==="/"?"movies":pathname}`, request.url)
        );
        return middleware(request, event, response2)
    }
     if(!pathNameIsMissingLocale){
    const parts=pathname.split("/");
    console.log(locales.includes(parts[parts.length-1]));
    if(locales.includes(parts[parts.length-1]))
     response2=NextResponse.redirect(
            new URL(`/${parts[parts.length-1]}/movies`, request.url)
        );
     return middleware(request, event, response2)

  }
   response2 = NextResponse.next()
  return middleware(request, event, response2)
}

}