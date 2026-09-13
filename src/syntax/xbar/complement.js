export class Complement {
  attach(headToken, complementToken) {
    return { label: `${headToken.upos}'`, children: [headToken, complementToken] };
  }
}
