// 1. Créer un événement au scroll
window.addEventListener("scroll", () => {

    // 2. Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut
    if (window.scrollY > 50) {
        navbar.style.height = 50 + "px";
    } else {
        navbar.style.height = 90 + "px";
    }

    // 3. Faire apparaitre l'image de la partie improvise

    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight

    if (scrollValue > 0.40) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
    } 
    
    // 4. Faire apparaitre la popup quand on est en bas du site
    if (scrollValue > 0.85) {
        popup.style.opacity = 1;
        popup.style.transform = "none";
    }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours
closeBtn.addEventListener("click", () => {
    popup.remove();
});

// OU POUR CONSERVER LA TRANSITION :
// if (scrollValue > 0.85 && playOnce) {
//     popup.style.opacity = 1;
//     popup.style.transform = "none";
//     playOnce = false;
// }
// closeBtn.addEventListener("click", () => {
//     popup.style.opacity = 0;
//     popup.style.transform = "translateX(500px)";
// });
