const cierraedu = document.getElementById("edu").querySelector(".fa-chevron-circle-up");
const educont = document.getElementById("educacion-contenido");
const edu = document.getElementById("edu");

cierraedu.addEventListener("click", () => {
    educont.classList.add("ocultar");
    edu.classList.add("edu");
    cierraedu.classList.replace("fa-chevron-circle-up", "fa-chevron-circle-down");
})

const abreedu = document.querySelector("fa-chevron-circle-down");

abreedu.addEventListener("click", () => {
    educont.classList.remove("ocultar");
    edu.classList.remove("edu")
    abreedu.classList.replace("fa-chevron-circle-down", "fa-chevron-circle-up");
})