export class PredicateArgumentStructure {
  constructor(predicate, argumentsMap = {}) {
    this.predicate = predicate;
    this.arguments = argumentsMap;
  }
}
