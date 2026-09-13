export class RelationMapper {
  mapRelation(head, child, position, wordOrder) {
    if (child.upos === 'PRON' || child.upos === 'NOUN') {
      if (wordOrder === 'SOV') {
        return position === 0 ? 'nsubj' : 'obj';
      }
      return position < head.id ? 'nsubj' : 'obj';
    }
    return 'dep';
  }
}
