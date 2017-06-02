import * as quark from "quark-gui";

let DragableList = quark.Molecules.Lists.DragableList;

export default `
<h4>Dragable list</h4>
${DragableList.getModule({
  id: 'dragable-list1',
  listItems: [
    { content: `first list item content` },
    { content: `second list item content` },
    { content: `third list item content` }
  ]
})}
`;