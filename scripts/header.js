const header = {
  css:"webix_header webix_dark",
  cols:[
    {
      view:"label", 
      label: "MyApp", 
      inputWidth:100, 
      align:"left",
    },
    {
      view:"button", 
      id:"profile_btn", 
      type:"icon",
      icon:"wxi-user", 
      label:"Profile",
      inputWidth:140, 
      align:"right",
      css:"profile_button",
    }
  ]
};

export {
  header,
}