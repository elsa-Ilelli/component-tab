"use strict";
//Récupération des éléments
const tabs = document.querySelectorAll(".component__tab");
const tabsContainer = document.querySelector(".component__tab-container");
const tabsContent = document.querySelectorAll(".component__content");

//Délégation d'événement sur les boutons du container
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".component__tab");

  //Si clic en dehors des boutons -> Clôture de la fonction
  if (!clicked) return;

  //Suppression des classes "active" sur les éléments non concernés par le clic
  tabs.forEach((tab) => tab.classList.remove("component__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("component__content--active")
  );

  //Ajout des classes "active" sur les éléments concernés par le clic
  clicked.classList.add("component__tab--active");
  document
    .querySelector(`.component__content--${clicked.dataset.tab}`)
    .classList.add("component__content--active");
});
