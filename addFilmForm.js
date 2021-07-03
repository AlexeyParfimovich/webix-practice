function addFilm(){
  if ($$("add_film_form").validate()) {
    $$("film_table").add($$("add_film_form").getValues());
    webix.message("A film was added!");
  } else {
    webix.message({ type:"error", text:"Form data is invalid" });
  };

};

function clearInputs(){
  $$("add_film_form").clear();
};

const addFilmForm = { 
  padding:20,
  scroll:false,
  complexData:true,
  width:400,
  rows:[
    { view:"template", template:"Edit films", type:"section" },
    { view:"form", 
      id:"add_film_form",
      elements:[
        { view:"text", id:"film_title", 
          name:"title", label:"Title",
          validate: webix.rules.isNotEmpty,
          invalidMessage: "Title can not be empty" },
        { view:"text", id:"film_year", 
          name:"year", label:"Year",
          validate:webix.rules.isNumber,
          invalidMessage: "Year must be a number" },
        { view:"text", id:"film_rating", 
          name:"rating", label:"Rating",
          validate:webix.rules.isNumber,
          invalidMessage: "Rating must be a number" },
        { view:"text", id:"film_votes",
          name:"votes", label:"Votes",
          validate:webix.rules.isNumber,
          invalidMessage: "Votes must be a number" },
        { margin:5, cols:[
          { view:"button", label:"Add new", click:addFilm },
          { view:"button", label:"Clear", click:clearInputs }
        ]},
      ],
      elementsConfig:{
        on:{
          'onChange': function(newv, oldv){ this.validate(); }
        }
      }
    }
  ]
};

export {
  addFilmForm,
}