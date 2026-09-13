import { RelativeClauseParser } from './relative-clause.js';
import { ComplementClauseParser } from './complement-clause.js';

export class ClauseParser {
  constructor() {
    this.relativeParser = new RelativeClauseParser();
    this.complementParser = new ComplementClauseParser();
  }

  parse(tokens) {
    return {
      mainClause: tokens,
      subordinateClauses: []
    };
  }
}
