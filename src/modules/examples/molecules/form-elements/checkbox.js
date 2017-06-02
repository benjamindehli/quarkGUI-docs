import * as quark from "quark-gui";

let Checkbox = quark.Molecules.FormElements.Checkbox;

export default ` 
<h4>Checkbox</h4>
${Checkbox.getModule({
	id: 'molecule-checkbox1',
	name: 'molecule-checkboxes',
	value: 'one',
	label: 'Checkbox 1'
})}

${Checkbox.getModule({
	id: 'molecule-checkbox2',
	name: 'molecule-checkboxes',
	value: 'two',
	label: 'Checkbox 2'
})}
`;
