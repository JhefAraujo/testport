function handleclick() {
    this.document.getElementById("sec1").style.display = "block";
    for (let i = 0; i < document.getElementsByClassName('container').length; i++) {
        const element = document.getElementsByClassName('container')[i];
        element.style.opacity = 0;
    }
    this.document.getElementsByTagName("img")[0].classList.add("headerH1");
    setTimeout(() => {
        this.document.body.style.overflowY = "scroll";
    }, 1000);
    this.removeEventListener("click", arguments.callee);
}

window.addEventListener("click", handleclick);

document.getElementsByTagName("img")[0].addEventListener("click", function () {
    this.classList.remove("headerH1");
    document.body.style.overflowY = "hidden";
    for (let i = 0; i < document.getElementsByClassName('container').length; i++) {
        const element = document.getElementsByClassName('container')[i];
        element.style.opacity = 1;
    }
    document.getElementById("sec1").classList.add("sec1Hide");
    setTimeout(() => {
        document.getElementById("sec1").style.display = "none";
        document.getElementById("sec1").classList.remove("sec1Hide");
        window.addEventListener("click", handleclick);
    }, 1300);
});

//comentário para desbugar