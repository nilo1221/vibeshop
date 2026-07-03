import { redirect } from 'next/navigation';
import { languages, Language } from '@/lib/i18n';

export default function LangPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Language;
  
  if (!languages[lang]) {
    redirect('/');
  }
  
  // Redirect to home with language parameter
  redirect(`/?lang=${lang}`);
}
