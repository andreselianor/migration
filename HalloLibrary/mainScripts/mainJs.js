
function changeSite(file) {
    window.open(file, "_self");
}


var fictionView = true;
function displayFiction() {
    let nodes = document.querySelectorAll(".tagFiction")
    if (fictionView) {
        nodes.forEach((element) => {
            element.style.display = "flex";
        });
    } else {
        nodes.forEach((element) => {
            element.style.display = "none";
        });
    }
    fictionView = !fictionView;
}

var loveView = true;
function displayLove() {
    let nodes = document.querySelectorAll(".tagLove")
    if (loveView) {
        nodes.forEach((element) => {
            element.style.display = "flex";
        });
    } else {
        nodes.forEach((element) => {
            element.style.display = "none";
        });
    }
    loveView = !loveView;
}

var europeView = true;
function displayEurope() {
    let nodes = document.querySelectorAll(".tagEurope")
    if (europeView) {
        nodes.forEach((element) => {
            element.style.display = "flex";
        });
    } else {
        nodes.forEach((element) => {
            element.style.display = "none";
        });
    }
    europeView = !europeView;
}

var gameView = true;
function displayGame() {
    let nodes = document.querySelectorAll(".tagGame")
    if (gameView) {
        nodes.forEach((element) => {
            element.style.display = "flex";
        });
    } else {
        nodes.forEach((element) => {
            element.style.display = "none";
        });
    }
    gameView = !gameView;
}

var actionView = true;
function displayAction() {
    let nodes = document.querySelectorAll(".tagAction")
    if (actionView) {
        nodes.forEach((element) => {
            element.style.display = "flex";
        });
    } else {
        nodes.forEach((element) => {
            element.style.display = "none";
        });
    }
    actionView = !actionView;
}

var musicView = true;
function displayMusic() {
    let nodes = document.querySelectorAll(".tagMusic")
    if (musicView) {
        nodes.forEach((element) => {
            element.style.display = "flex";
        });
    } else {
        nodes.forEach((element) => {
            element.style.display = "none";
        });
    }
    musicView = !musicView;
}

