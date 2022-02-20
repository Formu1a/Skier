let modal = document.getElementById("myModal");
let btn = document.getElementById("resGame");
let span = document.getElementsByClassName("close")[0];

let modalRules = document.getElementById("myModalrules");
let btnRules = document.getElementById("rules");
let spanRules = document.getElementsByClassName("closerules")[0];

btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

btnRules.onclick = function () {
    modalRules.style.display = "block";
};
spanRules.onclick = function () {
    modalRules.style.display = "none";
};

window.onclick = (e) => {
    if (e.target == modalRules) {
        modalRules.style.display = "none";
    }
};
