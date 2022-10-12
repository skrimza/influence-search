var burger = document.getElementById("menu__mobile");
burger.addEventListener("click", myFunction);

function myFunction() {
    var element = document.getElementById("menu__mobile_list");
    element.classList.toggle("active");

    burger.classList.toggle("change");
}