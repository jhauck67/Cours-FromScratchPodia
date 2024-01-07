// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const mousemove1 = document.querySelector(".round1");
const mousemove2 = document.querySelector(".round2");
const mousemove3 = document.querySelector(".round3");

window.addEventListener("mousemove", (e) => {
    mousemove1.style.setProperty("--x", e.x + "px"); 
    mousemove1.style.setProperty("--y", e.y + "px");
    mousemove2.style.setProperty("--x", e.x + "px"); 
    mousemove2.style.setProperty("--y", e.y + "px");    mousemove3.style.setProperty("--x", e.x + "px"); 
    mousemove3.style.setProperty("--y", e.y + "px"); 
});

// const mouses = document.querySelectorAll(".round");

// window.addEventListener("mousemove", (e) => {
//     mouses.forEach((round) => {
//         round.style.top = e.y + "px";
//         round.style.left = e.x + "px";
//     });
// });