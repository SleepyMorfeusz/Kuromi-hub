const appContainers = document.querySelectorAll(".app-container");
const appPopups = document.querySelectorAll(".app-popup");
const closeButtons = document.querySelectorAll(".closeButton");

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
