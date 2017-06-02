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
	primaryNavigation: {
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
					name: "Button row",
					link: "#"
				},
				{
					name: "Checkbox",
					link: "#"
				},
				{
					name: "Radio button",
					link: "#"
				},
				{
					name: "Input fied",
					link: "#"
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
				name: "Global",
				link: "",
				moduleLink: "global"
			},
			{
				name: "Atoms",
				link: "",
				moduleLink: "atoms"
			}, 
			{
				name: "Molecules",
				link: "",
				moduleLink: "molecules"
			}, {
				name: "Organisms",
				link: "",
				moduleLink: "organisms"
			}
			]
		}
	}
});

export {header}