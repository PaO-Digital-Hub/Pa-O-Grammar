export class SemanticRoleLabeller {
  labelRoles(tokens, wordOrder = 'SVO') {
    const roles = {};
    if (wordOrder === 'SOV') {
      roles.Agent = tokens[0]?.text;
      roles.Patient = tokens[1]?.text;
      roles.Predicate = tokens[tokens.length - 1]?.text;
    } else {
      roles.Agent = tokens[0]?.text;
      roles.Predicate = tokens[1]?.text;
      roles.Patient = tokens[2]?.text;
    }
    return roles;
  }
}
