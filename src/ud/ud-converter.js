import { UPOS } from './universal-pos.js';

export class UDConverter {
  toUniversalPOS(posTag) {
    const map = { NN: UPOS.NOUN, VB: UPOS.VERB, JJ: UPOS.ADJ, RB: UPOS.ADV };
    return map[posTag] || UPOS.NOUN;
  }
}
