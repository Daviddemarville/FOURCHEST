// src/restaurant1.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Sélecteurs DOM
  const citySelector = document.getElementById("city-select");
  const buttonValider = document.getElementById("valider");
  const buttonVege = document.getElementById("vege");
  const buttonCuisine = document.getElementById("cuisine");
  const cardContainer = document.getElementById("cardContainer");
  const searchInput = document.getElementById("searchInput");

  // Si on n'est pas sur la page restaurants (éléments manquants), on sort proprement
  if (!citySelector || !buttonValider || !cardContainer || !searchInput) {
    console.warn("[restaurants] éléments requis introuvables: skip init");
    return;
  }

  // --- Données
  const restaurantTable = [
    { nameOf: "Brasserie Excelsior", city: "Nancy", img: "/images/resto1.jpg",  imgNote: "/images/star.png", isVegetarian: false, isLocal: true,  score: "4.7" },
    { nameOf: "Aux Armes de Strasbourg", city: "Strasbourg", img: "/images/resto2.jpg",  imgNote: "/images/star.png", isVegetarian: true,  isLocal: true,  score: "4.1" },
    { nameOf: "La fine Bulle", city: "Reims", img: "/images/resto3.jpg",  imgNote: "/images/star.png", isVegetarian: true,  isLocal: true,  score: "4.6" },
    { nameOf: "The Drunky Stork Social Club", city: "Strasbourg", img: "/images/resto4.jpg",  imgNote: "/images/star.png", isVegetarian: false, isLocal: true,  score: "3.9" },
    { nameOf: "Au Vieux Strasbourg", city: "Strasbourg", img: "/images/resto5.jpg",  imgNote: "/images/star.png", isVegetarian: false, isLocal: true,  score: "4.2" },
    { nameOf: "La Grande Georgette", city: "Metz", img: "/images/resto6.jpg",  imgNote: "/images/star.png", isVegetarian: false, isLocal: false, score: "4.0" },
    { nameOf: "Le Stan'", city: "Nancy", img: "/images/resto7.jpg",  imgNote: "/images/star.png", isVegetarian: true,  isLocal: true,  score: "4.8" },
    { nameOf: "Caveau Des Rois", city: "Reims", img: "/images/resto8.jpg",  imgNote: "/images/star.png", isVegetarian: true,  isLocal: false, score: "3.8" },
    { nameOf: "L'Aloyau", city: "Metz", img: "/images/resto9.jpg",  imgNote: "/images/star.png", isVegetarian: true,  isLocal: true,  score: "4.5" },
    { nameOf: "Grabrielle Reims", city: "Reims", img: "/images/resto10.jpg", imgNote: "/images/star.png", isVegetarian: true,  isLocal: false, score: "4.1" },
    { nameOf: "Le Coq Rouge", city: "Reims", img: "/images/resto11.jpg", imgNote: "/images/star.png", isVegetarian: false, isLocal: false, score: "3.7" },
    { nameOf: "Restaurant L'ExtrA", city: "Reims", img: "/images/resto12.jpg", imgNote: "/images/star.png", isVegetarian: false, isLocal: true,  score: "4.5" },
    { nameOf: "Le Majeur", city: "Nancy", img: "/images/resto13.jpg", imgNote: "/images/star.png", isVegetarian: false, isLocal: false, score: "4.0" },
    { nameOf: "Le Bouche A Oreille", city: "Nancy", img: "/images/resto14.jpg", imgNote: "/images/star.png", isVegetarian: true,  isLocal: false, score: "4.3" },
    { nameOf: "La Maison Dans le Parc", city: "Nancy", img: "/images/resto15.jpg", imgNote: "/images/star.png", isVegetarian: true,  isLocal: true,  score: "4.9" },
    { nameOf: "La Table Du Gayot", city: "Strasbourg", img: "/images/resto16.jpg", imgNote: "/images/star.png", isVegetarian: false, isLocal: true,  score: "4.1" },
    { nameOf: "Restaurant Les Chauvins", city: "Strasbourg", img: "/images/resto17.jpg", imgNote: "/images/star.png", isVegetarian: true,  isLocal: true,  score: "4.8" },
    { nameOf: "Au Petit Louis", city: "Metz", img: "/images/resto18.jpg", imgNote: "/images/star.png", isVegetarian: true,  isLocal: true,  score: "4.6" },
    { nameOf: "La Fleure de Ly", city: "Metz", img: "/images/resto19.jpg", imgNote: "/images/star.png", isVegetarian: true,  isLocal: false, score: "3.9" },
    { nameOf: "La Popote", city: "Metz", img: "/images/resto20.jpg", imgNote: "/images/star.png", isVegetarian: false, isLocal: true,  score: "4.4" },
  ];

  // --- Filtre
  function restaurantFilter(table) {
    let filteredTable = [...table];

    // Ville
    const selectedCity = citySelector.value;
    if (selectedCity && selectedCity !== "Ville") {
      filteredTable = filteredTable.filter((r) => r.city === selectedCity);
    }

    // Végétarien
    if (buttonVege && buttonVege.checked) {
      filteredTable = filteredTable.filter((r) => r.isVegetarian);
    }

    // Cuisine locale
    if (buttonCuisine && buttonCuisine.checked) {
      filteredTable = filteredTable.filter((r) => r.isLocal);
    }

    // Recherche (nom ou ville)
    const searchTerm = (searchInput.value || "").toLowerCase().trim();
    if (searchTerm) {
      filteredTable = filteredTable.filter(
        (r) =>
          r.nameOf.toLowerCase().includes(searchTerm) ||
          r.city.toLowerCase().includes(searchTerm),
      );
    }

    // Tri par score (numérique)
    return filteredTable.sort(
      (a, b) => parseFloat(b.score) - parseFloat(a.score),
    );
  }

  // --- Affichage
  function createdCard(restaurantCard) {
    const card = document.createElement("article");
    card.classList.add(
      "deleteResto",
      "block",
      "rounded-lg",
      "bg-white/95",
      "shadow-2xl",
      "w-[220px]",
      "h-auto",
      "max-w-sm",
      "mx-auto",
      "mb-10",
      "transition",
      "duration-300",
      "hover:scale-120",
    );

    // Lien global
    const link = document.createElement("a");
    link.href = "order.html";
    card.appendChild(link);

    // Image resto
    const imgResto = document.createElement("img");
    imgResto.classList.add("rounded-t-lg", "w-[220px]", "h-[146px]", "object-cover");
    imgResto.src = restaurantCard.img;
    imgResto.alt = restaurantCard.nameOf;
    link.appendChild(imgResto);

    // Texte
    const textContainer = document.createElement("div");
    textContainer.classList.add("p-1", "py-2", "text-surface", "dark:to-black", "text-center");
    link.appendChild(textContainer);

    const titreResto = document.createElement("h2");
    titreResto.classList.add("mb-2", "text-xl", "font-medium", "leading-tight");
    titreResto.textContent = restaurantCard.nameOf;
    textContainer.appendChild(titreResto);

    // Score + étoile
    const starContainer = document.createElement("div");
    starContainer.classList.add("flex", "items-center", "justify-center", "my-2");

    const scoreText = document.createElement("span");
    scoreText.classList.add("text-s", "font-semibold", "mr-2", "text-[#191998]");
    scoreText.textContent = restaurantCard.score;
    starContainer.appendChild(scoreText);

    const noteEtoile = document.createElement("img");
    noteEtoile.classList.add("w-5");
    noteEtoile.src = restaurantCard.imgNote;
    noteEtoile.alt = restaurantCard.score;
    starContainer.appendChild(noteEtoile);

    textContainer.appendChild(starContainer);

    // Séparateur
    const ligne = document.createElement("hr");
    ligne.classList.add(
      "my-2",
      "h-px",
      "border-t-0",
      "bg-transparent",
      "bg-gradient-to-r",
      "from-transparent",
      "via-neutral-500",
      "to-transparent",
      "opacity-75",
      "dark:via-neutral-800",
    );
    textContainer.appendChild(ligne);

    const cityResto = document.createElement("h2");
    cityResto.textContent = restaurantCard.city;
    textContainer.appendChild(cityResto);

    cardContainer.appendChild(card);
  }

  // --- Utils
  function cleanScreen() {
    document.querySelectorAll(".deleteResto").forEach((n) => n.remove());
  }

  function filterAndRender() {
    const filtered = restaurantFilter(restaurantTable);
    cleanScreen();
    filtered.forEach(createdCard);
  }

  // --- State initial depuis localStorage
  const savedCity = localStorage.getItem("citySelected");
  if (savedCity) {
    citySelector.value = savedCity;
  }

  // --- Rendu initial (corrige le "restaurant is not defined")
  for (const restaurant of restaurantFilter(restaurantTable)) {
    createdCard(restaurant);
  }

  // --- Événements
  buttonValider.addEventListener("click", (e) => {
    e.preventDefault();
    filterAndRender();
  });

  searchInput.addEventListener("input", filterAndRender);
  if (buttonVege) buttonVege.addEventListener("change", filterAndRender);
  if (buttonCuisine) buttonCuisine.addEventListener("change", filterAndRender);

  // --- Bouton retour haut de page (optionnel)
  const scrollButton = document.querySelector("[data-role='scroll-arrow']");
  if (scrollButton) {
    scrollButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    const onScroll = () => {
      scrollButton.classList.toggle("hidden", window.scrollY <= 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
  }
});
