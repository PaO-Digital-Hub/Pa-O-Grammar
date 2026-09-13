export class Tokenizer {
  tokenize(text, lang = 'en') {
    if (!text || typeof text !== 'string') return [];
    
    if (lang === 'en') {
      return text.trim().split(/\s+/).map((word, idx) => ({
        id: idx + 1,
        text: word.replace(/[^\w\s]/gi, ''),
        raw: word,
        lang
      }));
    }
    
    if (lang === 'my' || lang === 'pao') {
      const cleaned = text.replace(/\u200b/g, '').trim();
      const tokens = cleaned.split(/\s+/);
      return tokens.map((word, idx) => ({
        id: idx + 1,
        text: word,
        raw: word,
        lang
      }));
    }
    return [];
  }
}
