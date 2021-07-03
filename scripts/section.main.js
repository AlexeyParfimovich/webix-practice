import { filmForm } from "./section.filmForm.js";
import { sideMenu } from "./section.sideMenu.js";
import { filmTable } from "./section.filmTable.js";

const mainSection = { 
  cols:[ 
    sideMenu, 
    { view:"resizer" },
    filmTable, 
    filmForm ]
};

export {
  mainSection
};