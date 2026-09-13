export class HeadFinder {
  findHead(tokens, wordOrder = 'SVO') {
    if (wordOrder === 'SOV') {
      return tokens[tokens.length - 1]; // Verb is head at the end
    }
    const verb = tokens.find(t => t.upos === 'VERB');
    return verb || tokens[1] || tokens[0];
  }
}
