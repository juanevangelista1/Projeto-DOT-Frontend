$(document).ready(function () {
  $('#toggleButton1').click(function () {
    $('#text-show1').toggle(400)
    if ($('#text-show1').is(':visible')) {
      $('#arrowDownImg1').attr('id', 'arrowUpImg')
    } else if ($('#text-show1').is(':hidden')) {
      $('#arrowUpImg').attr('id', 'arrowUpImg')
    }
  })
})

$(document).ready(function () {
  $('#toggleButton2').click(function () {
    $('#text-show2').toggle(400)
  })
})

$(document).ready(function () {
  $('#toggleButton3').click(function () {
    $('#text-show3').toggle(400)
  })
})

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
