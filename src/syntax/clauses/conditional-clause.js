export class ConditionalClauseParser {
  parse(clauseTokens) {
    return { type: 'ConditionalClause', tokens: clauseTokens };
  }
}
