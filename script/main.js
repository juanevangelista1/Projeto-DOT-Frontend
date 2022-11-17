$(document).ready(function () {
  $('#toggleButton1').click(function () {
    $('#text-show1').toggle(400)
    if ($('#text-show1').is(':visible')) {
      $('#arrowDownImg1').attr('id', 'arrowUpImg')
    }
  })
})

$(document).ready(function () {
  $('#toggleButton3').click(function () {
    $('#text-show3').toggle(400)
  })
})

// $('#drop-down-card-footer-icon').click(function toggleDropDown() {
//   $('#drop-down-card-footer-icon, #drop-down-card-footer-div')
//     .toggle()
//     .css('visibility', 'visible')
//   $('#drop-down-card-footer-div-clicked').toggleClass('hide')
// })

// Shadow after scroll on header

// const header = document.querySelector('#header')
// const navHeight = header.offsetHeight

// window.addEventListener('scroll', function () {
//   if (window.scrollY >= navHeight) {
//     header.classList.add('scroll')
//   } else {
//     header.classList.remove('scroll')
//   }
// })
// window.addEventListener('scroll', function () {
//   if (window.scrollY >= navHeight) {
//     header.classList.add('scroll')
//   } else {
//     header.classList.remove('scroll')
//   }
// })
