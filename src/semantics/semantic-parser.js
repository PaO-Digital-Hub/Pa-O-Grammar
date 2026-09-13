import { SemanticRoleLabeller } from './semantic-role.js';
import { IntermediateRepresentation } from './intermediate-representation.js';

export class SemanticParser {
  constructor() {
    this.labeller = new SemanticRoleLabeller();
  }

  parse(tokens, langProfile) {
    const roles = this.labeller.labelRoles(tokens, langProfile.wordOrder);
    return new IntermediateRepresentation('EVENT_ACTION', roles);
  }
}
