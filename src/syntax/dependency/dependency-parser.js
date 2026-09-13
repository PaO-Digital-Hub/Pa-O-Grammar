import { DependencyGraph } from './dependency-graph.js';
import { HeadFinder } from './head-finder.js';
import { RelationMapper } from './relation-mapper.js';

export class DependencyParser {
  constructor() {
    this.headFinder = new HeadFinder();
    this.relationMapper = new RelationMapper();
  }

  parse(tokens, langProfile) {
    const graph = new DependencyGraph();
    tokens.forEach(t => graph.addNode(t));

    const head = this.headFinder.findHead(tokens, langProfile.wordOrder);
    graph.addEdge(0, head.id, 'ROOT');

    tokens.forEach((token, idx) => {
      if (token.id !== head.id) {
        const rel = this.relationMapper.mapRelation(head, token, idx, langProfile.wordOrder);
        graph.addEdge(head.id, token.id, rel);
      }
    });

    return graph.getTopology();
  }
}
