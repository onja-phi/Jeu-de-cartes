console.log("----JEUX DE CARTE----");
const prompt = require("prompt-sync")();

const feu = "feu";
const eau = "eau";
const plante = "plante";

function menu() {
    console.log("Tapez : 1-pour jouer ");
    console.log("Tapez : 2-pour les regles du jeu ");
    let rep = +prompt("Votre choix: ");

    if (rep === 1) {
        console.log("MENU: ")
        console.log("1-Feu");
        console.log("2-Eau");
        console.log("3-Plante");
    
        for (let i = 1; i <= 3; i++) {
                choice = +prompt("Veuillez choisir une carte  ");
        }
        
    }

    else if (rep === 2) {
        console.log("On dispose chacun trois cartes avec 3 manches");
        console.log("Voici les consignes: ");
        console.log("le feu bat la plante ");
        console.log("L'eau bat le feu ");
        console.log("La plante bat l'eau");
        menu();
    } else {
        menu();
    }
    return choice;
}

function aleatoire(strings) {
    let index = Math.floor(Math.random() * strings.length);
    let stringsAleatoire = strings[index];
    return stringsAleatoire;

}

let myScore = 0;
let iaScore = 0;

function game() {
    for (let manche = 1; manche <= 3; manche++) {
        let myCard = aleatoire([feu, eau, plante]);
        let iaCard = aleatoire([feu, eau, plante]);
        if (
            (myCard === "feu" && iaCard === "plante") ||
            (myCard === "plante" && iaCard === "eau") ||
            (myCard === "eau" && iaCard === "feu")
        ) {
            myScore++;
            console.log("Je gagne la manche ")
        } else if ((iaCard === "feu" && myCard === "plante") ||
            (iaCard === "plante" && myCard === "eau") ||
            (iaCard === "eau" && myCard === "feu")
        ) {
            iaScore++;
            console.log("L'IA gagne la manche");
        } else {
            console.log("Egalité");
        }
    }

    if (myScore < iaScore) {
        console.log("l'IA a remporte le jeu");
    }
    else if (iaScore < myScore) {
        console.log("C'est moi qui a gagné le jeu");
    }
    else {
        console.log("Egalité");
    }
}


menu();
game();
console.log(menu());