export class CrossLingualMapper {
  mapWordOrder(tokens, sourceProfile, targetProfile) {
    if (sourceProfile.wordOrder === targetProfile.wordOrder) return tokens;
    
    // SOV -> SVO Transformation
    if (sourceProfile.wordOrder === 'SOV' && targetProfile.wordOrder === 'SVO') {
      if (tokens.length >= 3) {
        const subj = tokens[0];
        const verb = tokens[tokens.length - 1];
        const obj = tokens.slice(1, -1);
        return [subj, verb, ...obj];
      }
    }
    
    // SVO -> SOV Transformation
    if (sourceProfile.wordOrder === 'SVO' && targetProfile.wordOrder === 'SOV') {
      if (tokens.length >= 3) {
        const subj = tokens[0];
        const verb = tokens[1];
        const obj = tokens.slice(2);
        return [subj, ...obj, verb];
      }
    }
    return tokens;
  }
}
