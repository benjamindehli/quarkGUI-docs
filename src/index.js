import * as quark from 'quark-gui';

import * as homePage from "./modules/pages/home";

require("../src/style/main.scss");


quark.Init.default();

document.body.innerHTML = homePage.page;