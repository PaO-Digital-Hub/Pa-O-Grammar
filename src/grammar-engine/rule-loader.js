export class RuleLoader {
  loadRules(rulesJson) {
    return rulesJson.rules || [];
  }
}
