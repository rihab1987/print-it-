const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
// Selectionner les flèches 
const arrow_right = document.querySelector('.arrow_right');
const arrow_left = document.querySelector('.arrow_left');
const numberOfSlides = slides.length; // une variable qui contient le nombre du tableau slides // slides.length renvoie le nombre totale d'élements dans le tableau slides 
// Définir un compteur 
let compteur = 0;
// Ajouter l'écouteur d'évenement sur les flèches 
arrow_right.addEventListener("click", function() {
    compteur++; // Incrémente le compteur lorsque la flèche droite est cliquée
    if (compteur >= numberOfSlides) {
        compteur = 0; // Retourne au début si on dépasse le nombre de diapositives
    }
    showSlide(compteur);
});

arrow_left.addEventListener("click", function() {
    compteur--; // Décrémente le compteur lorsque la flèche gauche est cliquée
    if (compteur < 0) {
        compteur = numberOfSlides - 1; // Retourne à la dernière diapositive si on va en dessous de 0
    }
    showSlide(compteur);
});
// Ajouter des bullet points 
const bulletsContainer = document.querySelector(".dots"); // Sélectionnez le conteneur des bullet points
// créer une boucle et pour chaque slide on crée un bullet point 

for (let i = 0; i < numberOfSlides; i++) {
    const bullet = document.createElement("div"); // Créez un élément <div> pour chaque point
    bullet.classList.add("dot"); // Ajoutez une classe pour styliser les bullet points si nécessaire

    // Ajouter un écouteur d'évenemnts pour les bullet point 

    bullet.addEventListener("click", function() {
        showSlide(i); // Cette fonction doit être définie pour afficher la diapositive correspondante
    });
    bulletsContainer.appendChild(bullet); // Ajoutez bullet point au conteneur des bullet points
}

function showSlide(index) {
    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');
    const dots = document.querySelectorAll('.dot');
// changer l'attribut src de l'image avec l'url contenu dans l'objet slide 
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
 // changer le texte de l'image avec le tagline approprié 
    bannerText.innerHTML = slides[index].tagLine;

    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}
// Initialiser la première diapositive
showSlide(compteur);




