import * as HeaderSection from "../sections/header";
import * as FooterSection from "../sections/footer";
import * as ModulesSection from "../sections/modules";


let header = HeaderSection.header;
let footer = FooterSection.footer;
let modules = ModulesSection.content;

let page = `
${header}
<main id="mainContent">
<div class="main-content">
<h1>quarkGUI</h1>
<p></p>
${modules}
<h2>Atoms</h2>
<h2>Molecules</h2>
<h2>Organisms</h2>
</div>
${footer}
</main>`;


export {page};