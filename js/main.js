var burger = document.getElementById("menu__mobile");
burger.addEventListener("click", myFunction);

function myFunction() {
    var element = document.getElementById("menu__mobile_list");
    element.classList.toggle("active");

    burger.classList.toggle("change");
}
var product = document.getElementById("header__prod"),
    influence = document.getElementById("header__influence"),
    infBtn = document.getElementById("influence-btn"),
    prodBtn = document.getElementById("prod-btn"),
    closeBtn = document.getElementById('close-btn'),
    overlay = document.getElementById('overlay'),
    modal = document.getElementById('modal');

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
infBtn.addEventListener('click', () => {
    modal.classList.add('active');
});
prodBtn.addEventListener('click', () => {
    modal.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});
overlay.addEventListener('click', () => {
    modal.classList.remove('active');
});