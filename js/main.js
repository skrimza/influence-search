var burger = document.getElementById("menu__mobile");
burger.addEventListener("click", myFunction);

function myFunction() {
    var element = document.getElementById("menu__mobile_list");
    element.classList.toggle("active");

    burger.classList.toggle("change");
}
var product = document.getElementById("header__prod");
var influence = document.getElementById("header__influence");
var infBtn = document.getElementById("influence-btn");
var prodBtn = document.getElementById("prod-btn");

product.addEventListener("mouseover", () => {
    prodBtn.classList.add("active");
});
product.addEventListener("mouseout", () => {
    prodBtn.classList.remove("active");
});

influence.addEventListener("mouseover", () => {
    infBtn.classList.add("active");
});

influence.addEventListener("mouseout", () => {
    infBtn.classList.remove("active");
});