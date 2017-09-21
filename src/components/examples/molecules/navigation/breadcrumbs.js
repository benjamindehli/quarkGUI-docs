import * as quark from "quark-gui";

let Breadcrumbs = quark.Molecules.Navigation.Breadcrumbs;

export default `
<h4>Dragable list</h4>
${Breadcrumbs.getModule({
	breadcrumbItems: [
	{ name: 'first breadcrumb', link: '#' },
	{ name: 'second breadcrumb', link: '#' },
	{ name: 'third breadcrumb', link: '#' }
	]
})}
`;