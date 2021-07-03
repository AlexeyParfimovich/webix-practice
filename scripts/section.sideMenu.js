const menu_data = [
	{id: "dashboard", value: "Dashboards" },
	{id: "users", value:"Users" },
	{id: "products", value:"Products" },
	{id: "locations", value:"Locations" },
];

const sideMenu = { 
  rows:[
    {
      view: "sidebar",
      data: menu_data,
      borderless: true,
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

export {
  sideMenu
};
