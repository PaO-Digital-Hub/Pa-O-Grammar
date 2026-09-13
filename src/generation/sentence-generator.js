import { WordOrderGenerator } from './word-order-generator.js';
import { MorphologyGenerator } from './morphology-generator.js';
import { SurfaceRealizer } from './surface-realizer.js';

export class SentenceGenerator {
  constructor() {
    this.orderGen = new WordOrderGenerator();
    this.morphGen = new MorphologyGenerator();
    this.realizer = new SurfaceRealizer();
  }

  generate(ir, targetProfile) {
    const orderedWords = this.orderGen.generate(ir, targetProfile);
    const inflected = this.morphGen.inflect(orderedWords, targetProfile);
    return this.realizer.realize(inflected);
  }
}
