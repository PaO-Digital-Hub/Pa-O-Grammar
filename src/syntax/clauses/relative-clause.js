export class RelativeClauseParser {
  parse(clauseTokens) {
    return { type: 'RelativeClause', tokens: clauseTokens };
  }
}
