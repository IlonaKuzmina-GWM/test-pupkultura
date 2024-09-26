import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "lv"],

  // Used when no locale matches
  defaultLocale: "lv",

  localePrefix: "as-needed",
  
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(lv|en)/:path*"],
};
