import * as quark from "quark-gui";

let Modal = quark.Molecules.Messaging.Modal;

export default `
<h4>Modal</h4>
${Modal.getModule({
	id: 'modal1',
	triggerElement: '',
	modalElement: {
		title: 'Modal title',
		content: `<p>modal content</p>`
	}
})}
`;