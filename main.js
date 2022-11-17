function showCard1() {
  $('#toggleButton1').click(() => {
    $('#text-show1').toggle(400)
    if ($('#text-show1').is(':visible')) {
      $('#toggleButton1').attr('id', 'arrowUpButton')
      $('#footerCard').attr('id', '#footerCardHide')
    } else if ($('#text-show1').is(':hidden')) {
      $('#arrowUpImg').attr('id', 'arrowUpImg')
    }
  })
}

function showCard2() {
  $('#toggleButton2').click(() => {
    $('#text-show2').toggle(400)
    if ($('#text-show2').is(':visible')) {
      $('#toggleButton2').attr('id', 'arrowUpButton')
      $('#footerCard').attr('id', '#footerCardHide')
    } else if ($('#text-show2').is(':hidden')) {
      $('#arrowUpImg').attr('id', 'arrowUpImg')
    }
  })
}

function showCard3() {
  $('#toggleButton3').click(() => {
    $('#text-show3').toggle(400)
    if ($('#text-show3').is(':visible')) {
      $('#toggleButton3').attr('id', 'arrowUpButton')
      $('#footerCard').attr('id', '#footerCardHide')
    } else if ($('#text-show3').is(':hidden')) {
      $('#arrowUpImg').attr('id', 'arrowUpImg')
    }
  })
}

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
