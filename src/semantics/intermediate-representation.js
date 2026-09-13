export class IntermediateRepresentation {
  constructor(concept, roles) {
    this.concept = concept;
    this.roles = roles;
    this.timestamp = new Date().toISOString();
  }
}
