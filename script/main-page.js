const appContainers = document.querySelectorAll(".app-container");
const appPopups = document.querySelectorAll(".app-popup");
const closeButtons = document.querySelectorAll(".closeButton");
const code = document.getElementById("code");

appPopups.forEach((popup) => {
  popup.style.display = "none";
});

appContainers.forEach((container, index) => {
  container.addEventListener("click", () => {
    appPopups.forEach((popup) => {
      popup.style.display = "none";
    });

    appPopups[index].style.display = "block";
  });
});

closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    appPopups[index].style.display = "none";
  });
});

//code script

code.addEventListener("click", function () {
  code.textContent = "NEWIR-GC5QW-2WG0G";
  code.style.fontSize = "3rem";
});
