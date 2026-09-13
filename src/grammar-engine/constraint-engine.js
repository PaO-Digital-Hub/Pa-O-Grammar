export class ConstraintEngine {
  validate(tokens) {
    const hasVerb = tokens.some(t => t.upos === 'VERB');
    return {
      isValid: hasVerb,
      error: hasVerb ? null : 'Missing verb predicate in clause.'
    };
  }
}
