export class POSTagger {
  constructor(lexicon = {}) {
    this.lexicon = lexicon;
  }

  tag(tokens) {
    return tokens.map(token => {
      const entry = this.lexicon[token.text] || {};
      return {
        ...token,
        upos: entry.pos || 'NOUN',
        xpos: entry.xpos || 'NN',
        features: entry.features || {}
      };
    });
  }
}
