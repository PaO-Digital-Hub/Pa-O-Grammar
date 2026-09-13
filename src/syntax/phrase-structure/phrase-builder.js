import { TreeNode } from './tree.js';

export class PhraseBuilder {
  build(tokens, wordOrder = 'SVO') {
    if (tokens.length < 3) return new TreeNode('S', tokens.map(t => new TreeNode(t.upos, [], t.text)));
    
    const subjectNode = new TreeNode('NP', [new TreeNode(tokens[0].upos, [], tokens[0].text)]);
    
    let vpNode;
    if (wordOrder === 'SOV') {
      const objectNode = new TreeNode('NP', [new TreeNode(tokens[1].upos, [], tokens[1].text)]);
      const verbNode = new TreeNode('V', [], tokens[2].text);
      vpNode = new TreeNode('VP', [objectNode, verbNode]);
    } else {
      const verbNode = new TreeNode('V', [], tokens[1].text);
      const objectNode = new TreeNode('NP', [new TreeNode(tokens[2].upos, [], tokens[2].text)]);
      vpNode = new TreeNode('VP', [verbNode, objectNode]);
    }
    
    return new TreeNode('S', [subjectNode, vpNode]);
  }
}
