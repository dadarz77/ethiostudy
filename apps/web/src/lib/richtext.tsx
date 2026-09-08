/* Tiny allowlist sanitizer for lesson rich text (content is our own authored
   HTML: b/i/sub/sup/p/br/ul/ol/li). Anything else is stripped to text. */
const ALLOWED = new Set(['B', 'I', 'EM', 'STRONG', 'SUB', 'SUP', 'P', 'BR', 'UL', 'OL', 'LI', 'SPAN']);

export function sanitizeHtml(html: string): string {
  const doc = new DOMParser().parseFromString('<div id="r">' + html + '</div>', 'text/html');
  const root = doc.getElementById('r')!;
  (function walk(node: Element) {
    for (const child of Array.from(node.children)) {
      if (!ALLOWED.has(child.tagName)) {
        // unwrap disallowed tags: replace element with its text content
        child.replaceWith(doc.createTextNode(child.textContent ?? ''));
        continue;
      }
      for (const attr of Array.from(child.attributes)) child.removeAttribute(attr.name);
      walk(child);
    }
  })(root);
  return root.innerHTML;
}

/** Rich-text block: renders sanitized lesson HTML. inline=true keeps it a <span>. */
export function Rich({ html, cls = '', inline = false }: { html: string; cls?: string; inline?: boolean }) {
  const clean = sanitizeHtml(html);
  return inline
    ? <span className={cls} dangerouslySetInnerHTML={{ __html: clean }} />
    : <div className={cls} dangerouslySetInnerHTML={{ __html: clean }} />;
}

/** Rough reading time for lesson prose (Ethiopian classroom pace ~180 wpm). */
export function readTime(words: number): string {
  const min = Math.max(1, Math.round(words / 180));
  return `${min} min read`;
}
