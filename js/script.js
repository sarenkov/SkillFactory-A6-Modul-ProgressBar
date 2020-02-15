let $defaultWidth = 25;

function setWidth(arg) {
    let res = $(".progress-bar").attr("style", "width: " + arg + "%;");
    return res;
}

function increaseWidth(wid) {
    return $defaultWidth += wid;
}

function checkWidth() {
    if ($defaultWidth < 100) {
        return true;
    } else {
        setWidth(100)
    }
}


function addProgressOnePercent() {
    if (checkWidth()) {
        setWidth(increaseWidth(1));
    }
}

function addProgressThreePercent() {
    if (checkWidth()) {
        setWidth(increaseWidth(3));
    }
}

function addProgressSevenPercent() {
    if (checkWidth()) {
        setWidth(increaseWidth(7));
    }
}

function resetProgressbarWidth() {
    $defaultWidth = 25;
    setWidth($defaultWidth);
}


function init() {
    $("button.one-percent").click(addEventListener, addProgressOnePercent);
    $("button.three-percent").click(addEventListener, addProgressThreePercent);
    $("button.seven-percent").click(addEventListener, addProgressSevenPercent);
    $("button.btn-progress-reset").click(addEventListener, resetProgressbarWidth);


    console.log("скрипт подгрузился");
}

$(document).ready(init);