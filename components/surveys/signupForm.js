import "survey-react/survey.css";

// Json that is mapped into suvery on pages/signup.js

export const json = {
  questions: [
    {
      name: "name",
      type: "text",
      title: "Please enter your name:",
      placeHolder: "Satoshi Nakamoto",
      isRequired: true,
      autoComplete: "name",
    },
    {
      name: "birthdate",
      type: "text",
      inputType: "date",
      placeHolder: "15/09/2008",
      title: "Your birthdate:",
      isRequired: true,
      autoComplete: "bdate",
    },
    {
        name: "color",
        type: "text",
        inputType: "color",
        isRequired: true,
        title: "Your favorite color:"
    },
    {
      name: "email",
      type: "text",
      inputType: "email",
      title: "Your e-mail:",
      placeHolder: "satoshi@gmail.com",
      isRequired: true,
      autoComplete: "email",
      validators: [
        {
          type: "email",
        },
      ],
    },
    // {
    //   type: "dropdown",
    //   name: "country",
    //   title: "Select the country...",
    //   isRequired: true,
    //   choicesByUrl: {
    //     url: "https://restcountries.eu/rest/v2/all",
    //     valueName: "name",
    //   },
    // },
    {
        type: "panel",
        name: "panel_countriesByRegion",
        title: "Select your location",
        elements: [
            {
                type: "dropdown",
                name: "region",
                title: "Select the region...",
                choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
            }, {
                type: "dropdown",
                name: "reg_country",
                title: "Select the country...",
                isRequired: true,
                choicesByUrl: {
                    url: "https://restcountries.eu/rest/v2/region/{region}",
                    valueName: "name"
                }
            }
        ]
    },
    {
      name: "eth address",
      type: "text",
      title: "Your Ethereum Address",
      isRequired: true,
      placeHolder: "0x.....",
      autoComplete: "eth",
    },
    {
      name: "twitter",
      type: "text",
      title: "Twitter handle",
      placeHolder: "@Satoshi2008",
      isRequired: true,
      placeHolder: "@Satoshi",
      autoComplete: "eth",
    },
  ],
};
