const karsilama = document.querySelector(".karsilamaPage");
const home = document.querySelector(".home");
const scrollIndicator = document.querySelector(".scroll-indicator");
const navbar = document.querySelector(".navbar")
const burgerMenu = document.querySelector(".burgerMenu");
const xMark = document.querySelector(".burgerMenu i");
const bar = document.querySelector(".bar i");
const burgerLinks = document.querySelectorAll(".burgerMenu a");
const button = document.querySelector(".button");



// scroll uyarı bir kez çıksın
document.addEventListener("DOMContentLoaded", () => {

     setTimeout(() => {
          scrollIndicator.style.display = "block";
     }, 7000);

     setTimeout(() => {
          scrollIndicator.style.display = "none";
     }, 8200);
})


// KARSILAMA SAYFASI 

document.addEventListener("DOMContentLoaded", () => {

     setTimeout(() => {
          karsilama.style.display = "none";
     }, 4000);

})


// PORFOLİO KART ÇEVİRME


const cards = document.querySelectorAll('.card');
const leftBtn = document.getElementById('arrowLeft');
const rightBtn = document.getElementById('arrowRight');

// Class isimlerini sırayla tutuyoruz
let positions = ['card-1', 'card-2', 'card-3'];

function updateCards() {
     // Kartlara yeni class ver
     cards.forEach((card, i) => {
          card.className = 'card ' + positions[i]; // sadece class'ları değiştiriyoruz
     });
}

leftBtn.addEventListener('click', (e) => {
     e.preventDefault();
     positions.push(positions.shift());
     updateCards();
});

rightBtn.addEventListener('click', (e) => {
     e.preventDefault();
     positions.unshift(positions.pop());
     updateCards();
});



//scroll indikce sayfa animasyonları yüklensin.
const container = document.querySelector('.container');
const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
          if (entry.isIntersecting) {
               const items = entry.target.querySelectorAll('.animate');
               items.forEach((item, index) => {
                    item.style.animationDelay = `${index * 0.1}s`;
                    item.classList.add('start');  // animasyonu tetikle
               });
               observer.unobserve(entry.target);
          }
     });
}, {
     threshold: 0.3,
});

document.querySelectorAll('section').forEach(section => {
     observer.observe(section);
});


// Burger Menu kapansın
xMark.addEventListener("click", (e) => {
     e.preventDefault();
     burgerMenu.style.display = "none";
     bar.style.display = "block";

})

// Burger Menu açılsın
bar.addEventListener("click", (e) => {
     e.preventDefault();
     burgerMenu.style.display = "block";
     bar.style.display = "none";
})


//Burger menu devreye girsin
function MobileMenu() {
     if (window.innerWidth < 768) {
          navbar.style.display = "none";
          bar.style.display = "block";
     } else {
          navbar.style.display = "flex";
          bar.style.display = "none";
     }
}

document.addEventListener("DOMContentLoaded", MobileMenu);
window.addEventListener("resize", MobileMenu); // ekran boyutu değiştiğinde çalıştır


// burger menu bir sayfaya tıklanınca kapansın

burgerLinks.forEach(link => {
     link.addEventListener("click", () => {
          burgerMenu.style.display = "none";
          bar.style.display = "block";
     });
});



//CV İNDİR

button.addEventListener("click", openCV)

function openCV() {
  window.open("cv.pdf", "_blank");
}