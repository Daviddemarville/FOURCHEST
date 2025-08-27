// src/index.js

// Sauvegarde de la ville choisie (si le champ existe)
const citySelectIndex = document.getElementById("default-search");
if (citySelectIndex) {
  citySelectIndex.addEventListener("change", () => {
    localStorage.setItem("citySelected", citySelectIndex.value);
  });
}

//---------------------------------- Section Carousel (index.html) -----------------------------------

// Conteneur du carrousel (présent uniquement sur index.html)
const carouselContainer = document.querySelector(".carousel-container");

// Tableau des images (public/images -> en prod: /images/...)
const images = [
  "/images/burger.jpg",
  "/images/bretzel.jpg",
  "/images/choucroute.jpg",
  "/images/flam.jpg",
  "/images/Baeckeoffe.jpg",
  "/images/gouglof.png",
  "/images/pates.jpg",
  "/images/quiche-lorraine.jpg",
];

// Création d'une piste de carrousel
function createCarouselRow(imgs, repeatCount, delay) {
  if (!carouselContainer) {
    console.warn("[carousel] .carousel-container introuvable: skip");
    return;
  }

  const carouselTrack = document.createElement("div");
  carouselTrack.classList.add("carousel-track", "carousel-track1");

  // Répéter les images pour obtenir une piste longue
  let allImages = [];
  for (let i = 0; i < repeatCount; i++) allImages = allImages.concat(imgs);

  // Remplir la piste
  allImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("carousel-image");
    img.style.marginRight = "10px"; // gap entre images
    img.style.width = "8rem";
    img.style.height = "auto";
    img.style.border = "solid 3px transparent";
    img.style.boxShadow = "3px 3px 3px 3px grey";
    carouselTrack.appendChild(img);
  });

  carouselContainer.appendChild(carouselTrack);

  // Animation
  let currentIndex = 0;
  function moveCarousel() {
    currentIndex += 1;
    const step = carouselTrack.scrollWidth / allImages.length;
    carouselTrack.style.transform = `translateX(-${currentIndex * step}px)`;
    if (currentIndex >= allImages.length) {
      currentIndex = 0;
      setTimeout(() => {
        carouselTrack.style.transition = "transform 0.5s ease-in-out";
      }, 50);
    }
  }

  setInterval(moveCarousel, delay);
}

// Exécuter le carrousel uniquement si le conteneur est présent
if (carouselContainer) {
  createCarouselRow(images, 99, 1000);
  createCarouselRow(images, 99, 2000);
}
