import * as Buttons from '../examples/buttons';
import * as FormElements from '../examples/form-elements';
import * as Lists from '../examples/lists';
import * as Cards from '../examples/cards';

let content = `
<section id="buttons" class="main-section">
<h2>Buttons</h2>
${Buttons.content}
</section>

<section id="form-elements" class="main-section">
<h2>Form elements</h2>
${FormElements.content}
</section>

<section id="lists" class="main-section">
<h2>Lists</h2>
${Lists.content}
</section>

<section id="cards" class="main-section">
<h2>Cards</h2>
${Cards.content}
</section>
`;

export {content}