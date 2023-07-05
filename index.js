console.log("Here");
const survey = {
  id: 123,
  questions: [
    {
      type: "shortText",
      text: "What is your name?",
    },
    {
      type: "longText",
      text: "describe yourself:",
    },
    {
      type: "multipleChoice",
      text: "What is your favorite color",
      options: ["red", "green", "blue"],
    },
    {
      type: "multipleSelect",
      text: "What foods do you like: ",
      options: ["pizza", "apples", "bread"],
    },
    {
      type: "range",
      text: "Rate this survey system",
      range: 10,
    },
  ],
};
