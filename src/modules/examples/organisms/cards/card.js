import * as quark from "quark-gui";

let Card = quark.Organisms.Cards.Card;
let Grid = quark.Molecules.Sections.Grid;
let ListMenu = quark.Organisms.Menus.ListMenu;


export default `
<h4>Card</h4>
${Grid.getModule({
	gridItems:[
	{
		sizes: {
			phone: 12,
			tablet: 6,
			tabletLandscape: 4,
			screen: 4
		},
		content: Card.getModule({
			title: 'Default card',
			content: ListMenu.getModule({
				id: 'card-list-menu1',
				hover: true,
				listItems: [
				{
					title: 'List item with subtitle',
					subTitle: 'This is a subtitle',
				},
				{
					title: 'List item without subtitle',
				},
				{
					title: 'List item with link and subtitle',
					subTitle: 'This is a subtitle',
					link: '#'
				},
				{
					title: 'List item with link',
					link: '#'
				},
				]
			})
		})
	},
	{
		sizes: {
			phone: 12,
			tablet: 6,
			tabletLandscape: 4,
			screen: 4
		},
		content: Card.getModule({
			title: 'Primary card',
			theme: 'primary',
			content: ListMenu.getModule({
				id: 'card-list-menu2',
				hover: true,
				listItems: [
				{
					title: 'List item with subtitle',
					subTitle: 'This is a subtitle',
				},
				{
					title: 'List item without subtitle',
				},
				{
					title: 'List item with link and subtitle',
					subTitle: 'This is a subtitle',
					link: '#'
				},
				{
					title: 'List item with link',
					link: '#'
				},
				]
			})
		})
	},
	{
		sizes: {
			phone: 12,
			tablet: 6,
			tabletLandscape: 4,
			screen: 4
		},
		content: Card.getModule({
			title: 'Info card',
			theme: 'info',
			content: ListMenu.getModule({
				id: 'card-list-menu3',
				hover: true,
				listItems: [
				{
					title: 'List item with subtitle',
					subTitle: 'This is a subtitle',
				},
				{
					title: 'List item without subtitle',
				},
				{
					title: 'List item with link and subtitle',
					subTitle: 'This is a subtitle',
					link: '#'
				},
				{
					title: 'List item with link',
					link: '#'
				},
				]
			})
		})
	},
	{
		sizes: {
			phone: 12,
			tablet: 6,
			tabletLandscape: 4,
			screen: 4
		},
		content: Card.getModule({
			title: 'Success card',
			theme: 'success',
			content: ListMenu.getModule({
				id: 'card-list-menu4',
				hover: true,
				listItems: [
				{
					title: 'List item with subtitle',
					subTitle: 'This is a subtitle',
				},
				{
					title: 'List item without subtitle',
				},
				{
					title: 'List item with link and subtitle',
					subTitle: 'This is a subtitle',
					link: '#'
				},
				{
					title: 'List item with link',
					link: '#'
				},
				]
			})
		})
	},
	{
		sizes: {
			phone: 12,
			tablet: 6,
			tabletLandscape: 4,
			screen: 4
		},
		content: Card.getModule({
			title: 'Warning card',
			theme: 'warning',
			content: ListMenu.getModule({
				id: 'card-list-menu5',
				hover: true,
				listItems: [
				{
					title: 'List item with subtitle',
					subTitle: 'This is a subtitle',
				},
				{
					title: 'List item without subtitle',
				},
				{
					title: 'List item with link and subtitle',
					subTitle: 'This is a subtitle',
					link: '#'
				},
				{
					title: 'List item with link',
					link: '#'
				},
				]
			})
		})
	},
	{
		sizes: {
			phone: 12,
			tablet: 6,
			tabletLandscape: 4,
			screen: 4
		},
		content: Card.getModule({
			title: 'Danger card',
			theme: 'danger',
			content: ListMenu.getModule({
				id: 'card-list-menu6',
				hover: true,
				listItems: [
				{
					title: 'List item with subtitle',
					subTitle: 'This is a subtitle',
				},
				{
					title: 'List item without subtitle',
				},
				{
					title: 'List item with link and subtitle',
					subTitle: 'This is a subtitle',
					link: '#'
				},
				{
					title: 'List item with link',
					link: '#'
				},
				]
			})
		})
	}
	]
})}
`;