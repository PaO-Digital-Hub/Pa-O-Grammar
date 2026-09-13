export class AmbiguityResolver {
  resolve(taggedTokens) {
    return taggedTokens.map((token, idx) => {
      // Contextual disambiguation heuristic
      if (token.text === 'can' && idx > 0 && taggedTokens[idx - 1].upos === 'PRON') {
        return { ...token, upos: 'AUX' };
      }
      return token;
    });
  }
}
