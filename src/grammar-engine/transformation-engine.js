import { CrossLingualMapper } from '../ud/cross-lingual-mapper.js';

export class TransformationEngine {
  constructor() {
    this.mapper = new CrossLingualMapper();
  }

  transform(tokens, sourceProfile, targetProfile) {
    return this.mapper.mapWordOrder(tokens, sourceProfile, targetProfile);
  }
}
