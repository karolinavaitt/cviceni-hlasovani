const formElm = document.querySelector("#formular");
const nameElm = document.querySelector("#voter");

const btnElm = document.querySelector(".btn");
const hlasuj = (event) => {
  event.preventDefault();

  const mujHlas = { optionId: 0, voterName: nameElm.value };

  fetch("https://apps.kodim.cz/daweb/hlasovani/api/poll/1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mujHlas),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "error") {
        console.log("Nemůžete hlasovat 2x stejným jménem");
      } else {
        console.log("OK");
      }
    });
};

btnElm.addEventListener("click", hlasuj);
