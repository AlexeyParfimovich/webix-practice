
import { filmForm } from "./section.filmForm.js";
import { sideMenu } from "./section.sideMenu.js";
import { filmTable } from "./section.filmTable.js";

import { header } from "./header.js";
import { footer } from "./footer.js";

const section = { 
  rows:[
    { 
      // autoheight: true,
      minHeight: 600,
      cols:[ 
        sideMenu, 
        { view:"resizer" },
        filmTable, 
        filmForm,
      ]},
    {}
  ]
};

webix.ui({
 id:"myApp",
 view:"layout",
 padding:5,
 rows:[
   header,
   section, 
   footer,
  ],
});