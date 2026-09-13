export class AgreementEngine {
  checkSubjectVerbAgreement(tokens) {
    const subj = tokens.find(t => t.upos === 'PRON' || t.upos === 'NOUN');
    const verb = tokens.find(t => t.upos === 'VERB');
    if (!subj || !verb) return true;

    if (subj.features?.Number === 'Sing' && verb.features?.Number === 'Plur') {
      return false;
    }
    return true;
  }
}
