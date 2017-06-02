import * as quark from "quark-gui";

let InputField = quark.Molecules.FormElements.InputField;

export default ` 
<h4>Input field</h4>
<h5>Default field</h5>
${InputField.getModule({
	id: 'molecule-input1',
	name: 'molecule-inputname1',
	type: 'text',
	placeholder: 'Placeholder text here',
	label: 'Input 1'
})}
<h5>Required field</h5>
${InputField.getModule({
	id: 'molecule-input2',
	name: 'molecule-inputname2',
	type: 'text',
	placeholder: 'Placeholder text here',
	label: 'Input 2',
	attributes: ['required']
})}
<h5>Readonly field</h5>
${InputField.getModule({
	id: 'molecule-input3',
	name: 'molecule-inputname3',
	type: 'text',
	placeholder: 'Placeholder text here',
	label: 'Input 3',
	attributes: ['readonly']
})}
<h5>Disabled field</h5>
${InputField.getModule({
	id: 'molecule-input4',
	name: 'molecule-inputname4',
	type: 'text',
	placeholder: 'Placeholder text here',
	label: 'Input 4',
	attributes: ['disabled']
})}
`;
