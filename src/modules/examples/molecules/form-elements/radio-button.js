import * as quark from "quark-gui";

let RadioButton = quark.Molecules.FormElements.RadioButton;

export default ` 
<h4>Radio button</h4>
${RadioButton.getModule({
	id: 'molecule-radio1',
	name: 'molecule-radio-buttons',
	value: 'one',
	label: 'Radio button 1'
})}
${RadioButton.getModule({
	id: 'molecule-radio2',
	name: 'molecule-radio-buttons',
	value: 'two',
	label: 'Radio button 2'
})}
`;
