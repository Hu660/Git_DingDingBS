var count = 2;
var a = [...document.querySelectorAll("#banner a")];
var carouselID = window.setInterval("carousel()", 2000);

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        count = i + 1;
        changebgcolor(count);
    }, false);
}

function carousel() {
    let imgSrc = `imges/b-ad${count}.jpg`;
    // 记录a标签需要变回背景颜色的序号
    let aCount = count - 1;
    if (aCount == 0) { aCount = 5; }
    let aRestore = `a${aCount}`;
    document.getElementById("b-ad").src = imgSrc;
    document.getElementById(aChange).style.backgroundColor = "hsl(150, 40%, 30%)";
    document.getElementById(aRestore).style.backgroundColor = "hsl(85, 55%, 50%)";
    count = count + 1;
    if (count == 6) { count = 1; }
}

function changebgcolor(num) {
    document.getElementById("b-ad").src = `imges/b-ad${num}.jpg`;
    for (let targetNum = 1; targetNum <= 5; targetNum++) {
        let aTarget = `a${targetNum}`;
        if (targetNum == num) {
            document.getElementById(aTarget).style.backgroundColor = "hsl(150, 40%, 30%)";
        } else {
            document.getElementById(aTarget).style.backgroundColor = "hsl(85, 55%, 50%)";
        }
    }
}