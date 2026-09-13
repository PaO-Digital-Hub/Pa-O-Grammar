export class FeatureEngine {
  extractFeatures(taggedTokens) {
    return taggedTokens.map(token => ({
      ...token,
      morphFeatures: {
        Number: token.features.Number || 'Sing',
        Person: token.features.Person || '3',
        Tense: token.features.Tense || 'Pres',
        Polite: token.features.Polite || 'Form'
      }
    }));
  }
}
