import { RuleMatcher } from './rule-matcher.js';
import { ConstraintEngine } from './constraint-engine.js';
import { AgreementEngine } from './agreement-engine.js';
import { TransformationEngine } from './transformation-engine.js';

export class RuleEngine {
  constructor() {
    this.matcher = new RuleMatcher();
    this.constraintEngine = new ConstraintEngine();
    this.agreementEngine = new AgreementEngine();
    this.transformationEngine = new TransformationEngine();
  }

  process(tokens, sourceProfile, targetProfile) {
    const constraintCheck = this.constraintEngine.validate(tokens);
    const agreementCheck = this.agreementEngine.checkSubjectVerbAgreement(tokens);
    const transformed = this.transformationEngine.transform(tokens, sourceProfile, targetProfile);

    return {
      constraintCheck,
      agreementCheck,
      transformedTokens: transformed
    };
  }
}
