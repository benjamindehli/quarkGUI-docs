import * as quark from 'quark-gui';

import * as homePage from "./modules/pages/home";

quark.Init.default();

document.body.innerHTML = homePage.page;