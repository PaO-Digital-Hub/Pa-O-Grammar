export class RuleMatcher {
  match(tokens, pattern) {
    if (tokens.length !== pattern.length) return false;
    return pattern.every((pos, idx) => tokens[idx].upos === pos || pos === '*');
  }
}
