import * as headerSection from "../sections/header";
import * as footerSection from "../sections/footer";


let header = headerSection.header;
let footer = footerSection.footer;

let page = `
${header}
<main id="mainContent">
<div class="main-content">
<h1>quarkGUI</h1>
</div>
${footer}
</main>`;


export {page};