import { PhraseBuilder } from './phrase-builder.js';

export class ConstituencyParser {
  constructor() {
    this.builder = new PhraseBuilder();
  }

  parse(tokens, langProfile) {
    return this.builder.build(tokens, langProfile.wordOrder);
  }
}
