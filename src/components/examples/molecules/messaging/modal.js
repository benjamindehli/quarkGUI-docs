import * as quark from "quark-gui";

let Modal = quark.Molecules.Messaging.Modal;
let Button = quark.Atoms.Buttons.Button;

export default `
<h4>Modal</h4>
${Modal.getModule({
	id: 'modal1',
	triggerElement: Button.getModule({
		content: "Standard modal",
		id: "modalButton",
		theme: "primary"
	}),
	modalElement: {
		title: 'Standard modal',
		content: `<p>modal content</p>`
	}
})}

${Modal.getModule({
	id: 'modal2',
	triggerElement: Button.getModule({
		content: "Scrollable modal",
		id: "modalButton",
		theme: "primary"
	}),
	modalElement: {
		title: 'Scrollable ',
		content: `<p>if</p><p>you</p><p>have</p><p>a lot</p><p>of</p><p>content,</p><p>use</p><p>this</p><p>modal</p><p>with</p><p>scrollbar</p><p>support</p>`,
		scrollable: true
	}
})}

${Modal.getModule({
	id: 'modal3',
	triggerElement: Button.getModule({
		content: "Fullscreen modal",
		id: "modalButton",
		theme: "primary"
	}),
	modalElement: {
		title: 'Fullscreen',
		content: `<p>This modal has full width and full height on smaller screens</p>`,
		fullscreen: true
	}
})}

${Modal.getModule({
	id: 'testmodal4',
	triggerElement: Button.getModule({
		content: "fullscreen scroll modal",
		id: "modalButton",
		theme: "primary"
	}),
	modalElement: {
		title: 'Fullscreen scroll',
		content: `<p>if</p><p>you</p><p>have</p><p>a lot</p><p>of</p><p>content,</p><p>use</p><p>this</p><p>modal</p><p>with</p><p>scrollbar</p><p>support</p><p>This modal also has full width and full height on smaller screens</p>`,
		scrollable: true,
		fullscreen: true
	}
})}


`;