function handleclick() {
    this.document.getElementById("sec1").style.display = "block";
    this.document.getElementsByTagName("h1")[0].classList.add("headerH1");
    setTimeout(() => {
        this.document.body.style.overflowY = "scroll";
    }, 1000);
    this.removeEventListener("click", arguments.callee);
}

window.addEventListener("click", handleclick);

document.getElementsByTagName("h1")[0].addEventListener("click", function () {
    this.classList.remove("headerH1");
    document.body.style.overflowY = "hidden";
    document.getElementById("sec1").classList.add("sec1Hide");
    setTimeout(() => {
        document.getElementById("sec1").style.display = "none";
        document.getElementById("sec1").classList.remove("sec1Hide");
        window.addEventListener("click", handleclick);
    }, 2000);
});
