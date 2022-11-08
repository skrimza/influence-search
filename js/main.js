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
    closeBtn = document.getElementById("close-btn"),
    overlay = document.getElementById("overlay"),
    modal = document.getElementById("modal"),
    choiseProdBtn = document.getElementById("choise__prod-btn"),
    formOne = document.getElementById("modal-window__form-one"),
    formTwo = document.getElementById("modal-window__form-two"),
    choiseInfBtn = document.getElementById("choise__inf-btn");


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
    modal.classList.add("active");
    choiseInfBtn.classList.add("hover");
    formTwo.classList.add("active");
});
prodBtn.addEventListener('click', () => {
    modal.classList.add("active");
    choiseProdBtn.classList.add("hover");
    formOne.classList.add("active");
});
closeBtn.addEventListener('click', () => {
    modal.classList.remove("active");
    choiseProdBtn.classList.remove("hover");
    choiseInfBtn.classList.remove("hover");
    formOne.classList.remove("active");
    formTwo.classList.remove("active");
});
overlay.addEventListener('click', () => {
    modal.classList.remove("active");
    choiseInfBtn.classList.remove("hover");
    choiseProdBtn.classList.remove("hover");
    formOne.classList.remove("active");
    formTwo.classList.remove("active");
});


var tabs = [choiseProdBtn, choiseInfBtn];
var contents = [formOne, formTwo];
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('hover');
            contents[i].classList.remove('active');
        }
        tab.classList.add('hover');
        contents[index].classList.add('active');
    })
});

console.log(tabs[0]);