import * as quark from "quark-gui";

let List = quark.Organisms.Lists.List;

export default `
<h3>Standard list</h3>
${List.getModule({
	id: 'list-menu1',
	raised: true,
	hover: true,
	listItems: [
	{
		id: 'listItem1',
		title: 'List item with subtitle',
		subTitle: 'This is a subtitle',
		buttonRow: {
			id: 'list-menu-button-row1',
			buttons: [
			{
				id: 'list-menu-buttonrow-button1',
				iconClass: 'fa fa-home'
			},
			{
				id: 'list-menu-buttonrow-button2',
				iconClass: 'fa fa-cog'
			},
			{
				id: 'list-menu-buttonrow-button3',
				iconClass: 'fa fa-list'
			}
			]
		}
	},
	{
		id: 'listItem2',
		title: 'List item without subtitle',
		buttonRow: {
			id: 'list-menu-button-row2',
			buttons: [
			{
				id: 'list-menu-buttonrow-button4',
				iconClass: 'fa fa-home'
			},
			{
				id: 'list-menu-buttonrow-button5',
				iconClass: 'fa fa-cog'
			},
			{
				id: 'list-menu-buttonrow-button6',
				iconClass: 'fa fa-list'
			}
			]
		}
	},
	{
		id: 'listItem3',
		title: 'List item with icon',
		iconClass: 'fa fa-user',
		buttonRow: {
			id: 'list-menu-button-row3',
			buttons: [
			{
				id: 'list-menu-buttonrow-button7',
				iconClass: 'fa fa-home'
			},
			{
				id: 'list-menu-buttonrow-button8',
				iconClass: 'fa fa-cog'
			},
			{
				id: 'list-menu-buttonrow-button9',
				iconClass: 'fa fa-list'
			}
			]
		}
	},
	{
		id: 'listItem4',
		title: 'List item with subtitle and icon',
		subTitle: 'This is a subtitle',
		iconClass: 'fa fa-user',
		buttonRow: {
			id: 'list-menu-button-row4',
			buttons: [
			{
				id: 'list-menu-buttonrow-button10',
				iconClass: 'fa fa-home'
			},
			{
				id: 'list-menu-buttonrow-button11',
				iconClass: 'fa fa-cog'
			},
			{
				id: 'list-menu-buttonrow-button12',
				iconClass: 'fa fa-list'
			}
			]
		}
	}
	]
})}
<h3>Expandable list</h3>
${List.getModule({
	id: 'list-menu2',
	raised: true,
	listItems: [
	{
		id: 'listItem5',
		title: 'List item with subtitle',
		subTitle: 'This is a subtitle',
		iconClass: 'fa fa-user',
		expandable: true,
		buttonRow: {
			id: 'list-menu-button-row5',
			buttons: [
			{
				id: 'list-menu-buttonrow-button13',
				iconClass: 'fa fa-home'
			},
			{
				id: 'list-menu-buttonrow-button14',
				iconClass: 'fa fa-cog'
			},
			{
				id: 'list-menu-buttonrow-button15',
				iconClass: 'fa fa-list'
			}
			]
		},
		expandableContent: '<h2>testcontent</h2>'
	},
	{
		id: 'listItem6',
		title: 'List item with subtitle and icon',
		subTitle: 'This is a subtitle',
		iconClass: 'fa fa-user',
		expandable: true,
		buttonRow: {
			id: 'list-menu-button-row6',
			buttons: [
			{
				id: 'list-menu-buttonrow-button16',
				iconClass: 'fa fa-home'
			},
			{
				id: 'list-menu-buttonrow-button17',
				iconClass: 'fa fa-cog'
			},
			{
				id: 'list-menu-buttonrow-button18',
				iconClass: 'fa fa-list'
			}
			]
		},
		expandableContent: 'testcontent'
	}
	]
})}

<h3>Dragable list menu</h3>
${List.getModule({
	id: 'list-menu3',
	raised: true,
	dragable: true,
	listItems: [
	{
		id: 'listItem7',
		title: 'List item with subtitle',
		subTitle: 'This is a subtitle',
		iconClass: 'fa fa-user',
		expandable: true,
		buttonRow: {
			id: 'list-menu-button-row7',
			buttons: [
			{
				id: 'list-menu-buttonrow-button13',
				iconClass: 'fa fa-home'
			},
			{
				id: 'list-menu-buttonrow-button14',
				iconClass: 'fa fa-cog'
			},
			{
				id: 'list-menu-buttonrow-button15',
				iconClass: 'fa fa-list'
			}
			]
		},
		expandableContent: '<h2>testcontent</h2>'
	},
	{
		id: 'listItem8',
		title: 'List item with subtitle and icon',
		subTitle: 'This is a subtitle',
		iconClass: 'fa fa-user',
		expandable: true,
		buttonRow: {
			id: 'list-menu-button-row8',
			buttons: [
			{
				id: 'list-menu-buttonrow-button16',
				iconClass: 'fa fa-home'
			},
			{
				id: 'list-menu-buttonrow-button17',
				iconClass: 'fa fa-cog'
			},
			{
				id: 'list-menu-buttonrow-button18',
				iconClass: 'fa fa-list'
			}
			]
		},
		expandableContent: 'testcontent'
	}
	]
})}
`;