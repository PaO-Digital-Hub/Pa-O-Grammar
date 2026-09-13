import { CrossLingualMapper } from '../../src/ud/cross-lingual-mapper.js';

export function runTests() {
  const mapper = new CrossLingualMapper();
  const paoProfile = { wordOrder: 'SVO' };
  const myanmarProfile = { wordOrder: 'SOV' };

  const tokens = [
    { text: 'ခွေ', upos: 'PRON' },
    { text: 'အံႏ', upos: 'VERB' },
    { text: 'ဒဲန်', upos: 'NOUN' }
  ];

  const transformed = mapper.mapWordOrder(tokens, paoProfile, myanmarProfile);
  console.assert(transformed[1].text === 'ဒဲန်', 'Test Failed: PaO (SVO) to Myanmar (SOV) object position mismatch');
  console.assert(transformed[2].text === 'အံႏ', 'Test Failed: PaO (SVO) to Myanmar (SOV) verb position mismatch');
  console.log('Cross-lingual transformation tests passed successfully!');
}
