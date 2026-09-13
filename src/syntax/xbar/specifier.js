export class Specifier {
  attach(xBarNode, specifierToken) {
    return { label: xBarNode.label.replace("'", 'P'), children: [specifierToken, xBarNode] };
  }
}
