
import { filmForm } from "./section.filmForm.js";
import { sideMenu } from "./section.sideMenu.js";
import { filmTable } from "./section.filmTable.js";

const headerSection = {
  css:"webix_header webix_dark",
  cols:[
    {
      view:"label", label: "MyApp", inputWidth:100, align:"left",
    },
    {
      view:"button", 
      id:"profile_btn", type:"icon",
      icon:"wxi-user", label:"Profile",
      // css:".webix_transparent .webix_button",
      inputWidth:140, 
      align:"right"
    }
  ]
};

const mainSection = { 
  cols:[ 
    sideMenu, 
    { view:"resizer" },
    filmTable, 
    filmForm ]
};

const footerSection = { 
  template:"This software is provided by <a href='https://webix.com' target='_blank'>https://webix.com</a>. All rights reserved (c)",
};

webix.ui({
 id:"myApp",
 rows:[headerSection, mainSection, footerSection]
});