import * as Buttons from './molecules/buttons';
import * as FormElements from './molecules/form-elements';

let content = `
<h3>Buttons<h3>
${Buttons.ButtonRow}

<h3>Form elements</h3>
${FormElements.InputField}
${FormElements.SelectList}
${FormElements.Checkbox}
${FormElements.RadioButton}
`;

export {content}