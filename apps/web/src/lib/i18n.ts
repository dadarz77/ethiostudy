/* UI copy — ported verbatim from js/app.js COPY (EN + አማርኛ).
   Lesson content itself is EN-only in the data; this covers chrome. */
export type Lang = 'en' | 'am';

const COPY: Record<Lang, Record<string, string>> = {
  en: {
    dashboard: 'Dashboard', browse: 'Browse Curriculum', practice: 'Practice', exam: 'Exam Prep',
    progress: 'Progress', bookmarks: 'Bookmarks', notes: 'Notes', settings: 'Settings',
    pickTopic: 'PICK A TOPIC', welcome: 'Welcome back, Student!', continue: 'Continue learning',
    explore: 'Explore subjects', weak: 'Practice weak topics', readiness: 'Exam readiness',
    noSessions: 'Your study story starts here.', start: 'Start studying',
  },
  am: {
    dashboard: 'መነሻ', browse: 'ሥርዓተ ትምህርት', practice: 'ልምምድ', exam: 'ለፈተና ዝግጅት',
    progress: 'እድገት', bookmarks: 'ምልክቶች', notes: 'ማስታወሻዎች', settings: 'ቅንብሮች',
    pickTopic: 'ርዕስ ምረጥ', welcome: 'እንኳን ደህና መጡ!', continue: 'ትምህርት ቀጥል',
    explore: 'ትምህርቶችን ይመልከቱ', weak: 'ደካማ ርዕሶችን ተለማመዱ', readiness: 'የፈተና ዝግጁነት',
    noSessions: 'የትምህርት ጉዞዎ እዚህ ይጀምራል።', start: 'መማር ጀምር',
  },
};

export function tr(key: string, lang: Lang): string {
  return COPY[lang]?.[key] ?? COPY.en[key] ?? key;
}
