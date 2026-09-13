export const PHRASE_RULES = {
  SVO: [
    { lhs: 'S', rhs: ['NP', 'VP'] },
    { lhs: 'VP', rhs: ['V', 'NP'] },
    { lhs: 'NP', rhs: ['PRON'] },
    { lhs: 'NP', rhs: ['NOUN'] }
  ],
  SOV: [
    { lhs: 'S', rhs: ['NP', 'VP'] },
    { lhs: 'VP', rhs: ['NP', 'V'] },
    { lhs: 'NP', rhs: ['PRON'] },
    { lhs: 'NP', rhs: ['NOUN'] }
  ]
};
