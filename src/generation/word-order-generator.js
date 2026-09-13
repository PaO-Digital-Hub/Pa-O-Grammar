export class WordOrderGenerator {
  generate(ir, targetProfile) {
    const { Agent, Predicate, Patient } = ir.roles;
    if (targetProfile.wordOrder === 'SOV') {
      return [Agent, Patient, Predicate].filter(Boolean);
    }
    return [Agent, Predicate, Patient].filter(Boolean);
  }
}
