import { data_set } from "../data/testdata.js";

const filmTable = {  
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

export {
  filmTable,
};