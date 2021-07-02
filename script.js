const headerSection = {
  template:"MyApp Header section"
};

const sideMenu = { 
  template:"Side menu"
};

const dataBase = { 
  template:"Data"
};

const editForm = { 
  template:"Form"
};

const mainSection = { 
  cols:[ sideMenu, dataBase, editForm ]
};

const footerSection = { 
  template:"This software is provided by https://webix.com. All rights reserved (c)"
};

webix.ui({
 id:"myApp",
 rows:[headerSection, mainSection, footerSection]
});