function addItem(){
  if ($$("add_film_form").validate()) {
    const film = $$("add_film_form").getValues();
    film.year = film.year.getFullYear();
    $$("film_table").add(film);
    webix.message(`The '${film.title}' film is added! `);
  } else {
    webix.message({ type:"error", text:"Form data is invalid" });
  };

};

function clearForm(){
  $$("add_film_form").clear();
};

const filmForm = { 
  width:400,
  padding:20,
  complexData:true,
  rows:[
    { view:"template",
      type:"section",
      template:"Edit films", 
    },
    { view:"form", 
      id:"add_film_form",
      borderless: true,
      elements:[
        { view:"text", 
          id:"film_title", 
          name:"title", 
          label:"Title",
          validate: webix.rules.isNotEmpty,
          invalidMessage: "Title can not be empty", 
        },
        { view:"datepicker", 
          id:"film_year", 
          name:"year", 
          label:"Year", 
          type:"year",
          format: "%Y",
          validate:webix.rules.isNotNull,
          invalidMessage: "Year must be a number", 
        },
        { view:"text", 
          id:"film_rating", 
          name:"rating", 
          label:"Rating",
          validate:webix.rules.isNumber,
          invalidMessage: "Rating must be a number",
        },
        { view:"text", 
          id:"film_votes",
          name:"votes", 
          label:"Votes",
          validate:webix.rules.isNumber,
          invalidMessage: "Votes must be a number",
        },
        { margin:5, 
          cols:[
            { view:"button", 
              label:"Add new",
              css:"form_button",
              click:addItem,
            },
            { view:"button", 
              label:"Clear", 
              css:"form_button",
              click:clearForm,
            }
        ]},
      ],
      elementsConfig:{
        on:{
          'onChange': function(newv, oldv){ this.validate(); }
        }
      }
    },
    {},
  ]
};

export {
  filmForm,
};