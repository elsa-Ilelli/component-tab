"use strict";

/*//////////////////////////////*/
/*       COMPONENT MANAGER      */
/*//////////////////////////////*/
//Récupération des éléments
const tabs = document.querySelectorAll(".tabComp__tab");
const tabsContainer = document.querySelector(".tabComp__tab-container");
const tabsContent = document.querySelectorAll(".tabComp__content");

//Délégation d'événement sur les boutons du container
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tabComp__tab");

  //Si clic en dehors des boutons -> Clôture de la fonction
  if (!clicked) return;

  //Suppression des classes "active" sur les éléments non concernés par le clic
  tabs.forEach((tab) => tab.classList.remove("tabComp__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("tabComp__content--active")
  );

  //Ajout des classes "active" sur les éléments concernés par le clic
  clicked.classList.add("tabComp__tab--active");
  document
    .querySelector(`.tabComp__content--${clicked.dataset.tab}`)
    .classList.add("tabComp__content--active");
});



/*//////////////////////////////*/
/*          DARK MODE           */
/*//////////////////////////////*/
document.querySelector('[data-switch-dark]').addEventListener('click', function() {
  if(document.documentElement.hasAttribute("dark")){
    document.documentElement.removeAttribute("dark");
    document.getElementById("btn-icon").src="src/img/moon.png";
  } else {
    document.documentElement.setAttribute("dark", "true");
    document.getElementById("btn-icon").src="src/img/sun.png";
  }
});

