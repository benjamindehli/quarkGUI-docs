import * as Atoms from '../examples/atoms';
import * as Molecules from '../examples/molecules';
import * as Organisms from '../examples/organisms';

let content = `
<h2>Atoms</h2>
${Atoms.content}

<h2>Molecules</h2>
${Molecules.content}

<h2>Organisms</h2>
${Organisms.content}
`;

export {content}