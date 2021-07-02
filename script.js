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
  template:"This software is provided by <a href='https://webix.com' target='_blank'>https://webix.com</a>. All rights reserved (c)",
};

webix.ui({
 id:"myApp",
 rows:[headerSection, mainSection, footerSection]
});