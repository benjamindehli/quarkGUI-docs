import * as quark from "quark-gui";

let SelectList = quark.Atoms.FormElements.SelectList;

export default ` 
<h4>Select list</h4>
${SelectList.getModule({
	id: 'atom-select1',
	name: 'atom-selectname1',
	type: 'text',
	placeholder: 'Choose an option',
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

${SelectList.getModule({
	id: 'atom-select2',
	name: 'atom-selectname2',
	type: 'text',
	placeholder: 'Type here',
	searchable: true,
	options: [
	{
		name: 'first',
		value: 'fist'
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
`;
