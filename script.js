// const textoCompleto = "Coming soon projects I'm working on...";
// const textoElemento = document.querySelector('.texto-infinito');

// function escribirTexto(texto, elemento, index = 0) {
//   if (index < texto.length) {
//     elemento.textContent += texto.charAt(index);
//     index++;
//     setTimeout(() => escribirTexto(texto, elemento, index), 70); 
//   } else {
//     setTimeout(() => {
//       elemento.textContent = ''; 
//       escribirTexto(texto, elemento); 
//     }, 1000);
//   }
// }

// escribirTexto(textoCompleto, textoElemento);

const navToggle = document.querySelector(".bars-menu");
const navList = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navList.classList.toggle("nav-menu_visible");
});


const menuLinks = document.querySelectorAll(".links-navbar");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        
        navList.classList.remove("nav-menu_visible");
    });
});





 




