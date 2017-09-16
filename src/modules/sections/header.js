import * as quark from "quark-gui";

let header = quark.Organisms.Global.Header.getModule({
	id: 'main-header',
	theme: 'primary',
	logo: {
		image: {
			src: require('../../img/svg/quark-GUI-logo-white.svg'),
			alt: 'app logo'
		},
		url: "/"
	},
	primaryNavigationLeft: {
		listItems: [
		{
			name: "Link",
			link: "#"
		}, 
		{
			name: "Dropdown",
			link: "#",
			dropdownContent: {
				listItems: [
				{
					name: "Buttons",
					link: "#buttons"
				},
				{
					name: "Form elements",
					link: "#form-elements"
				}, 
				{
					name: "Lists",
					link: "#lists"
				}, {
					name: "Cards",
					link: "#cards"
				}
				]
			}

		}
		]
	},
	sidebar: {
		sidebarNavigation: {
			listItems: [
			{
				name: "Buttons",
				link: "#buttons"
			},
			{
				name: "Form elements",
				link: "#form-elements"
			}, 
			{
				name: "Lists",
				link: "#lists"
			}, {
				name: "Cards",
				link: "#cards"
			}
			]
		}
	}
});

export {header}