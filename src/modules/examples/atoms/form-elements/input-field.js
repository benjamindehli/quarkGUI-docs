import * as quark from "quark-gui";

let InputField = quark.Atoms.FormElements.InputField;

export default ` 
<h4>Input field</h4>
<h5>Standard input field</h5>
${InputField.getModule({
	id: 'atom-input1',
	name: 'atom-inputname1',
	type: 'text',
	placeholder: 'Placeholder text here'
})}
<h5>Disabled input field</h5>
${InputField.getModule({
	id: 'atom-input1',
	name: 'atom-inputname1',
	type: 'text',
	placeholder: 'Placeholder text here',
	attributes: ['disabled']
})}
<h5>Required input field</h5>
${InputField.getModule({
	id: 'atom-input1',
	name: 'atom-inputname1',
	type: 'text',
	placeholder: 'Placeholder text here',
	attributes: ['required']
})}
`;
