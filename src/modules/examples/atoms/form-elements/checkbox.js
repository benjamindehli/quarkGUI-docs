import * as quark from "quark-gui";

let Checkbox = quark.Atoms.FormElements.Checkbox;

export default ` 
<h4>Checkbox</h4>
${Checkbox.getModule({
	id: 'atom-checkbox1',
	name: 'atom-checkboxes',
	value: 'one'
})}
${Checkbox.getModule({
	id: 'atom-checkbox2',
	name: 'atom-checkboxes',
	value: 'two'
})}
`;
