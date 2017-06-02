import * as quark from "quark-gui";

let RadioButton = quark.Atoms.FormElements.RadioButton;

export default ` 
<h4>Radio button</h4>
${RadioButton.getModule({
	id: 'atom-radio1',
	name: 'atom-radio-buttons',
	value: 'one'
})}
${RadioButton.getModule({
	id: 'atom-radio2',
	name: 'atom-radio-buttons',
	value: 'two'
})}
`;
