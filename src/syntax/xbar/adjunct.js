export class Adjunct {
  attach(xBarNode, adjunctToken) {
    return { label: xBarNode.label, children: [xBarNode, adjunctToken] };
  }
}
