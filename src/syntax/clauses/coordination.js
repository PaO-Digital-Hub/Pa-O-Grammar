export class CoordinationParser {
  parse(clauseTokens) {
    return { type: 'Coordination', tokens: clauseTokens };
  }
}
