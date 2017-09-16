import * as HeaderSection from "../sections/header";
import * as FooterSection from "../sections/footer";
import * as ModulesSection from "../sections/modules";


let header = HeaderSection.header;
let footer = FooterSection.footer;
let modules = ModulesSection.content;

let page = `
${header}
<main id="mainContent">
<div class="introduction-container">
<h1>quarkGUI</h1>
<p>A Webpack GUI framework based on atomic design</p>
</div>
<div class="main-content">
${modules}
</div>
${footer}
</main>`;


export {page};