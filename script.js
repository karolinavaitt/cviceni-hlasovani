console.log("funguju!");

fetch("https://apps.kodim.cz/daweb/hlasovani/api/poll/3", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    optionId: 2,
    voterName: "Zuzka",
  }),
});
