
// Kamel Case
let maSuperVariable = "Hello";

// ** Les variables **

// var = vieux JS
var unTexte = "voici un texte";

// const = constante
const prenom = "justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine =
    "Chaine précédente : " + chaine + ". Voila c'était le contenu";

// Concaténation avec guillements altgr+7
let autreConcatenation = `Chaine précédente : ${chaine}. Voila c'était le contenu`;

// ** Types de données **
let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = false;

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, true];
console.log("array", array)
// Objet : accolades {}
let object = {
    prenom: "audrey",
    age: 33,
    ville: "bordeaux",
};

let arbre;

// ** Les opérateurs **


// ** Opérateurs d'affectations **
let total = 0;

total = total + 1;
total++;

total += 5;
total -= 4;
total *= 2;
console.log("total", total);


// ** Structures de controle **
let x = 2;
let y = 2;


// }

// On teste si la variable est "true"
if (x) {
    console.log("x existe !");
}


if (x === y) {
    // console.log("ils sont égaux");
} else {
    console.log("pas égaux !");
}

let a = 2;
let b = "2";

if (a == b) {
    console.log("ils sont égaux");
} else {
    console.log("pas égaux !");
}


if (x < y || x > 1) {
    console.log("UI");
}


if (x < y && x > 1) {
    console.log("UI");
}

// ** Les fonctions **

// fonction classique (à l'ancienne)
function faireQuelqueChose() {
    console.log("je fais un truc");
    console.log(5 + 6);
    alert("Calcule terminé !");
}

// Il faut impérativement appeler la fonction pour qu'elle se joue
// appel de la fonction : faireQuelqueChose();

// fonction flêchée
const addition = (a, b) => {
    console.log(a + b);
};

addition(4, 3);
addition(432, 578481);

// ** La portée des variables **

function add2() {
    let num = 4;
    console.log(num + 2);
}
const nume = 55
console.log(nume);
