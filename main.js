function handleclick() {
    document.getElementById("sec1").style.display = "block";
    for (let i = 0; i < document.getElementsByClassName('container').length; i++) {
        const element = document.getElementsByClassName('container')[i];
        element.style.opacity = 0;
    }
    document.getElementsByTagName("img")[0].classList.add("headerH1");
    setTimeout(() => {
        document.body.style.overflowY = "scroll";
        removeEventListener("click", arguments.callee);
        document.getElementsByTagName("img")[0].addEventListener("click", recuo)
    }, 1000);

}

document.getElementsByClassName('logo')[0].addEventListener("click", handleclick);


function recuo() {
    document.getElementsByClassName('logo')[0].classList.remove("headerH1");
    document.body.style.overflowY = "hidden";
    for (let i = 0; i < document.getElementsByClassName('container').length; i++) {
        const element = document.getElementsByClassName('container')[i];
        element.style.opacity = 1;
    }
    document.getElementById("sec1").classList.add("sec1Hide");
    setTimeout(() => {
        document.getElementById("sec1").style.display = "none";
        document.getElementById("sec1").classList.remove("sec1Hide");
        document.getElementsByClassName('logo')[0].removeEventListener("click", recuo);
        document.getElementsByClassName('logo')[0].addEventListener("click", handleclick)
    }, 1300);
}

function adjustFontSize() {
    const container = document.getElementsByClassName('cardContainer')[0];
    const textElement = document.getElementsByClassName('tech')[0];
    let fontSize = parseFloat(window.getComputedStyle(textElement, null).getPropertyValue('font-size'));

    // Loop para ajustar o tamanho da fonte
    while (textElement.offsetWidth < container.offsetWidth) {
        fontSize += 1; // Aumenta o tamanho da fonte
        textElement.style.fontSize = fontSize + 'px';
    }

    // Reduz o tamanho da fonte em 1px para garantir que o texto não ultrapasse a largura da div
    fontSize -= 1;
    textElement.style.fontSize = fontSize + 'px';
}

var contador = 0;

function changeCard() {
    if (contador === 0) {
        document.getElementById("react").classList.remove("destaque");
        document.getElementById("html").classList.add("destaque");
        document.getElementById("sec1").style.backgroundColor = "rgba(17, 0, 0, 0.9)";
        contador = 1;
    }
    else if (contador === 1) {
        document.getElementById("html").classList.remove("destaque");
        document.getElementById("css").classList.add("destaque");
        document.getElementById("sec1").style.backgroundColor = "rgba(0, 0, 17, 0.9)";
        contador = 2;
    }
    else if (contador === 2) {
        document.getElementById("css").classList.remove("destaque");
        document.getElementById("react").classList.add("destaque");
        document.getElementById("sec1").style.backgroundColor = "rgb(0 12 17 / 90%)";
        contador = 0;
    }
}