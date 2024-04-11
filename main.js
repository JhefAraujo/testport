const secao = document.getElementById("sec1");
const logo = document.getElementsByClassName('logo')[0];

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

logo.addEventListener("click", handleclick);


function recuo() {
    logo.classList.remove("headerH1");
    document.body.style.overflowY = "hidden";
    for (let i = 0; i < document.getElementsByClassName('container').length; i++) {
        const element = document.getElementsByClassName('container')[i];
        element.style.opacity = 1;
    }
    secao.classList.add("sec1Hide");
    setTimeout(() => {
        secao.style.display = "none";
        secao.classList.remove("sec1Hide");
        logo.removeEventListener("click", recuo);
        logo.addEventListener("click", handleclick)
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
    const elementos = ["react", "html", "css"];
    const cores = ["rgb(0 20 25 / 90%)","rgba(25, 0, 0, 0.9)", "rgba(0, 0, 25, 0.9)"];

    document.getElementById(elementos[contador]).classList.remove("destaque");
    contador = (contador + 1) % elementos.length;
    document.getElementById(elementos[contador]).classList.add("destaque");
    secao.style.backgroundColor = cores[contador];
}