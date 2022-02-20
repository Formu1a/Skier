window.onhashchange = switchToStateFromURLHash;

var SPAState = {};

var mainPageButton = document.getElementById("mainPage");
var startGame = document.getElementById("startGame");
var rulesBut = document.getElementById("rules");
var resGamePage = document.getElementById("resGame");
let gameOver = document.getElementById("gameover");

var mountain = document.getElementById("mountain");
var preMountain = document.getElementById("preMountain");
var rules = document.getElementById("modal-contentrules");
var result = document.getElementById("myModal");
var panel = document.getElementById("panel");

function switchToStateFromURLHash() {
    var URLHash = window.location.hash;
    var stateJSON = decodeURIComponent(URLHash.substr(1));
    if (stateJSON != "") SPAState = JSON.parse(stateJSON);
    else SPAState = { pagename: "Main" };

    var pageHTML = "";
    switch (SPAState.pagename) {
        case "Main":
            preMountain.classList.remove("hid");
            preMountain.classList.add("vis");
            mountain.classList.remove("vis");
            mountain.classList.add("hid");
            panel.classList.remove("vis");
            panel.classList.add("hid");
            mainPageButton.classList.remove("vis");
            mainPageButton.classList.add("hid");
            gameOver.classList.remove("vis");
            gameOver.classList.add("hid");

            break;
        case "Game":
            preMountain.classList.remove("vis");
            preMountain.classList.add("hid");
            mountain.classList.remove("hid");
            mountain.classList.add("vis");
            panel.classList.remove("hid");
            panel.classList.add("vis");
            mainPageButton.classList.add("vis");
            mainPageButton.classList.remove("hid");
            gameOver.classList.add("vis");
            gameOver.classList.remove("hid");
            break;
        case "Rules":
            startGame.classList.add("hid");
            break;
        case "Scores":
            preMountain.style.display = "none";
            rules.style.display = "none";
            result.style.display = "block";
            restoreInfo();
            break;
    }
}

function switchToState(newState) {
    location.hash = encodeURIComponent(JSON.stringify(newState));
}

mainPageButton.onclick = function (EO) {
    switchToState({ pagename: "Main" });
    EO.preventDefault();
};

startGame.onclick = function (EO) {
    switchToState({ pagename: "Game" });
    EO.preventDefault();
};

rulesBut.onclick = function (EO) {
    switchToState({ pagename: "Rules" });
    EO.preventDefault();
};

resGamePage.onclick = function (EO) {
    switchToState({ pagename: "Scores" });
    EO.preventDefault();
};
switchToStateFromURLHash();
