//import { data_set } from "./testdata";

const data_set = [
	{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1, category:"Thriller"},
	{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2, category:"Crime"},
	{ id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3, category:"Crime"},
	{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4, category:"Western"},
	{ id:5, title:"Pulp fiction", year:1994, votes:533848, rating:8.9, rank:5, category:"Crime"},
	{ id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6, category:"Western"}
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
  template:"Side menu"
};

const dataBase = { 
  view:"datatable",
  autoConfig:true,
  // url:"testdata.js"
  data:data_set
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