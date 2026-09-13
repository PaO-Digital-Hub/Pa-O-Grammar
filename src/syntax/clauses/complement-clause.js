export class ComplementClauseParser {
  parse(clauseTokens) {
    return { type: 'ComplementClause', tokens: clauseTokens };
  }
}
