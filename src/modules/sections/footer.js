import * as quark from "quark-gui";

let footer = quark.Organisms.Global.Footer.getModule({
	logo: {
		image: {
			src: require('../../img/svg/quark-GUI-logo-primary.svg'),
			alt: 'quarkGUI logo'
		},
		url: '/'
	},
	content: `
	<div class="text-center">
	<p>quarkGUI licensed under <a href="https://github.com/benjamindehli/quarkGUI/blob/master/LICENSE">GNU General Public License</a></p>
	<p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>
	</div>
	`
});

export {footer}