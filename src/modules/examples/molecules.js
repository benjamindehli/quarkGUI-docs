import * as Buttons from './molecules/buttons';
import * as FormElements from './molecules/form-elements';
import * as Lists from './molecules/lists';
import * as Messaging from './molecules/messaging';
import * as Navigation from './molecules/navigation';

let content = `
<h3>Buttons<h3>
${Buttons.ButtonRow}

<h3>Form elements</h3>
${FormElements.InputField}
${FormElements.SelectList}
${FormElements.Checkbox}
${FormElements.RadioButton}

<h3>Lists</h3>
${Lists.DragableList}

<h3>Messaging</h3>
${Messaging.Modal}

<h3>Navigation</h3>
${Navigation.Breadcrumbs}

`;

export {content}