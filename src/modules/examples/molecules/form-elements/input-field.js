import * as quark from "quark-gui";

let InputField = quark.Molecules.FormElements.InputField;

export default ` 
<section id="form-elements-input-fields" class="sub-section">
<h3>Input fields</h3>
<h4>Default field</h4>
${InputField.getModule({
	id: 'molecule-input1',
	name: 'molecule-inputname1',
	type: 'text',
	placeholder: 'Placeholder',
	label: 'Label'
})}
<h4>Required field</h4>
${InputField.getModule({
	id: 'molecule-input2',
	name: 'molecule-inputname2',
	type: 'text',
	placeholder: 'Placeholder',
	label: 'Label',
	attributes: ['required']
})}
<h4>Readonly field</h4>
${InputField.getModule({
	id: 'molecule-input3',
	name: 'molecule-inputname3',
	type: 'text',
	placeholder: 'Placeholder',
	label: 'Label',
	attributes: ['readonly']
})}
<h4>Disabled field</h4>
${InputField.getModule({
	id: 'molecule-input4',
	name: 'molecule-inputname4',
	type: 'text',
	placeholder: 'Placeholder',
	label: 'Label',
	attributes: ['disabled']
})}
</section>
`;
