import * as quark from "quark-gui";

let SelectList = quark.Molecules.FormElements.SelectList;

export default ` 
<section id="form-elements-select-lists" class="sub-section">
<h3>Select lists</h3>
<h4>Normal select list</h4>
${SelectList.getModule({
	id: 'molecule-select1',
	name: 'molecule-selectname1',
	type: 'text',
	placeholder: 'Choose an option',
	label: 'Normal select list',
	options: [
	{
		name: 'first',
		value: 'first'
	},
	{
		name: 'second',
		value: 'second'
	},
	{
		name: 'third',
		value: 'third'
	},
	{
		name: 'fourth',
		value: 'fourth'
	},
	{
		name: 'fifth',
		value: 'fifth'
	}
	]
})}

<h4>Searchable select list</h4>
${SelectList.getModule({
	id: 'molecule-select2',
	name: 'molecule-selectname2',
	type: 'text',
	placeholder: 'Type here',
	label: 'Searchable select list',
	searchable: true,
	options: [
	{
		name: 'first',
		value: 'first'
	},
	{
		name: 'second',
		value: 'second'
	},
	{
		name: 'third',
		value: 'third'
	},
	{
		name: 'fourth',
		value: 'fourth'
	},
	{
		name: 'fifth',
		value: 'fifth'
	}
	]
})}

<h4>Disabled select list</h4>
${SelectList.getModule({
	id: 'molecule-select3',
	name: 'molecule-selectname3',
	type: 'text',
	placeholder: 'Type here',
	label: 'Disabled select list',
	searchable: true,
	attributes: ['disabled'],
	options: [
	{
		name: 'first',
		value: 'first'
	},
	{
		name: 'second',
		value: 'second'
	},
	{
		name: 'third',
		value: 'third'
	},
	{
		name: 'fourth',
		value: 'fourth'
	},
	{
		name: 'fifth',
		value: 'fifth'
	}
	]
})}

<h4>Readonly select list</h4>
${SelectList.getModule({
	id: 'molecule-select4',
	name: 'molecule-selectname4',
	type: 'text',
	placeholder: 'Type here',
	label: 'Readonly select list',
	searchable: true,
	attributes: ['readonly'],
	options: [
	{
		name: 'first',
		value: 'first'
	},
	{
		name: 'second',
		value: 'second'
	},
	{
		name: 'third',
		value: 'third'
	},
	{
		name: 'fourth',
		value: 'fourth'
	},
	{
		name: 'fifth',
		value: 'fifth'
	}
	]
})}
</section>
`;
