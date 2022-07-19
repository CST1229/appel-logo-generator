const input = document.getElementById("name");
const lowsub = document.getElementById("lowsub");
const subtitleInput = document.getElementById("subtitle-input");
const logoOutline = document.getElementById("logo-outline");
const logoBack = document.getElementById("logo-back");
const logoFront = document.getElementById("logo-front");
const subtitle = document.getElementById("subtitle");

input.addEventListener("input", update);
subtitleInput.addEventListener("input", update);
lowsub.addEventListener("click", update);

update();
function update() {
    logoFront.textContent = input.value;
    const formattedHTML = logoFront.innerHTML.replaceAll(
        "&lt;E&gt;",
        '<img alt="E" draggable="false" class="appel" src="./img/appel.png">'
    )
    const formattedHTMLback = logoFront.innerHTML.replaceAll(
        "&lt;E&gt;",
        '<img alt="E" draggable="false" class="appel" src="./img/appel-shadow.png">'
    )
    logoFront.innerHTML = formattedHTML;
    logoBack.innerHTML = formattedHTMLback;
    logoOutline.innerHTML = formattedHTML;
    
    subtitle.textContent = subtitleInput.value;
    if (lowsub.checked) {
        subtitle.classList.add("low");
    } else {
        subtitle.classList.remove("low");
    }
}