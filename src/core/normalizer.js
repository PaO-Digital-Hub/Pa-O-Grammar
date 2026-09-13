export class Normalizer {
  normalize(text, lang = 'en') {
    if (!text) return '';
    let normalized = text.trim();
    if (lang === 'en') {
      normalized = normalized.toLowerCase();
    } else if (lang === 'my' || lang === 'pao') {
      normalized = normalized.replace(/\u200B/g, ''); // Remove zero-width spaces
    }
    return normalized;
  }
}
