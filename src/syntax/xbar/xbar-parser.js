import { XBarProjection } from './projections.js';
import { Specifier } from './specifier.js';
import { Complement } from './complement.js';

export class XBarParser {
  parse(tokens, langProfile) {
    const headIndex = langProfile.wordOrder === 'SOV' ? tokens.length - 1 : 1;
    const head = tokens[headIndex] || tokens[0];
    const proj = new XBarProjection(head.upos);
    
    return {
      type: 'XBarTree',
      projection: proj.xp,
      head: head.text,
      specifier: tokens[0]?.text || null,
      complement: tokens.filter((_, idx) => idx !== 0 && idx !== headIndex).map(t => t.text)
    };
  }
}
