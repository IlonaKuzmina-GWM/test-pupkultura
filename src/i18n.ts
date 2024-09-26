
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'lv'];
 
export default getRequestConfig(async ({locale}) => {
  const effectiveLocale = locale || "lv";
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(effectiveLocale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${effectiveLocale}.json`)).default
  };
});