import { DependencyTopology } from './topology.js';

export class DependencyGraph {
  constructor() {
    this.nodes = new Map();
    this.edges = [];
  }

  addNode(token) {
    this.nodes.set(token.id, token);
  }

  addEdge(headId, childId, relation) {
    this.edges.push({ headId, childId, relation });
  }

  getTopology() {
    return new DependencyTopology(Array.from(this.nodes.values()), this.edges);
  }
}
