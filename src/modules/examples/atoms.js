import * as Buttons from './atoms/buttons';
import * as FormElements from './atoms/form-elements';

let content = `
<h3>Buttons<h3>
${Buttons.Button}

<h3>Form elements</h3>
${FormElements.InputField}
${FormElements.SelectList}
${FormElements.Checkbox}
${FormElements.RadioButton}
`;

export {content}