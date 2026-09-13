export class MorphAnalyzer {
  analyze(token, lexicon = {}) {
    const entry = lexicon[token.text] || {};
    return {
      ...token,
      lemma: entry.lemma || token.text,
      root: entry.root || token.text,
      affixes: entry.affixes || [],
      aspect: entry.aspect || 'SIMPLE'
    };
  }
}
