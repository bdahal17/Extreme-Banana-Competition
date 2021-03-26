const menu = document.querySelector("._dropMenu");
const drop = document.querySelector(".drop");
const removeDropDown = document.querySelector("._removeDropDown");
menu.addEventListener("click", () => {
  drop.style.display = "block";
});
removeDropDown.addEventListener("click", () => {
  drop.style.display = "none";
});
