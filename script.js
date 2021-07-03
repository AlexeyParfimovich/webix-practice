import { data_set } from "./testdata.js";
import { addFilmForm } from "./addFilmForm.js";

var menu_data = [
	{id: "dashboard", value: "Dashboards" },
	{id: "users", value:"Users" },
	{id: "products", value:"Products" },
	{id: "locations", value:"Locations" },
];

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
  rows:[
    {
      view: "sidebar",
      data: menu_data,
      select:true,
      on:{
        onAfterSelect: function(id){
          webix.message("Selected: "+this.getItem(id).value)
        }
      }
    },
    { view:"label", 
      label:"<span class='webix_icon wxi-check'></span> Connected" }
  ]
};

const dataBase = {  
  rows:[ 
    {
      view:"datatable",
      id:"film_table",
      autoConfig:true,
      scroll:"auto",
      data:data_set,
      pager:"pager"
    },
    {
      view:"pager", id:"pager"
    }
  ]
};


const mainSection = { 
  cols:[ 
    sideMenu, 
    { view:"resizer" },
    dataBase, 
    addFilmForm ]
};

const footerSection = { 
  template:"This software is provided by <a href='https://webix.com' target='_blank'>https://webix.com</a>. All rights reserved (c)",
};

webix.ui({
 id:"myApp",
 rows:[headerSection, mainSection, footerSection]
});