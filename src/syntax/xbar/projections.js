export class XBarProjection {
  constructor(category) {
    this.xp = `${category}P`;  // Max Projection (e.g., VP)
    this.xBar = `${category}'`; // Intermediate Projection (e.g., V')
    this.head = category;       // Head (e.g., V)
  }
}
