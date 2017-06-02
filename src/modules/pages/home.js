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
<p>A Webpack GUI framework based on atomic design</p>
${modules}
</div>
${footer}
</main>`;


export {page};