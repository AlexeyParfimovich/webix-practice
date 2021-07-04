import { data_set } from "../data/testdata.js";

const filmTable = {  
  rows:[ 
    {
      view:"datatable",
      id:"film_table",
      autoConfig:true,
      scroll:"y",
      data:data_set,
      // pager:"pager",
      on:{
        onAfterLoad: function(){ 
          webix.message("Films data loaded"); 
        }
      }
    },
    // {
    //   view:"pager", id:"pager"
    // }
  ],
};

export {
  filmTable,
};