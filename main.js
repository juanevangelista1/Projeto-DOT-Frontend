// Abrir e fechar Menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (var element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    evento
  })
}
//cara esse comentario é importante
// Fechar quando clicar no a

const links = document.querySelectorAll('nav ul li a')

for (var link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Shadow after scroll on header

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// SWIPER

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: false
  }
})
