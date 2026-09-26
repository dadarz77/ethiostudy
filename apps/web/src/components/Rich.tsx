import { sanitizeHtml } from '../lib/richtext';

/** Rich-text block: renders sanitized lesson HTML. inline=true keeps it a <span>. */
export function Rich({ html, cls = '', inline = false }: { html: string; cls?: string; inline?: boolean }) {
  const clean = sanitizeHtml(html);
  return inline
    ? <span className={cls} dangerouslySetInnerHTML={{ __html: clean }} />
    : <div className={cls} dangerouslySetInnerHTML={{ __html: clean }} />;
}
