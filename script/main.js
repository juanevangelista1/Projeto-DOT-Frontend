// DROPDOWN
$('#toggleButton1').click(function () {
  $('#textShow1').toggle().css('#textShow1', 'hidden')
  if ($('#textShow1').is(':visible') && $('#footerCard1').is(':visible')) {
    $('#toggleButton1').attr('id', 'arrowUpButton1') &&
      $('#footerCard1').attr('id', 'footerCardSelected1')
  } else {
    $('#arrowUpButton1').attr('id', 'toggleButton1') &&
      $('#footerCardSelected1').attr('id', 'footerCard1')
  }
})

$('#toggleButton2').click(function () {
  $('#textShow2').toggle()
  if ($('#textShow2').is(':visible') && $('#footerCard2').is(':visible')) {
    $('#toggleButton2').attr('id', 'arrowUpButton2') &&
      $('#footerCard2').attr('id', 'footerCardSelected2')
  } else {
    $('#arrowUpButton2').attr('id', 'toggleButton2') &&
      $('#footerCardSelected2').attr('id', 'footerCard2')
  }
})

$('#toggleButton3').click(function () {
  $('#textShow3').toggle()
  if ($('#textShow3').is(':visible') && $('#footerCard3').is(':visible')) {
    $('#toggleButton3').attr('id', 'arrowUpButton3') &&
      $('#footerCard3').attr('id', 'footerCardSelected3')
  } else {
    $('#arrowUpButton3').attr('id', 'toggleButton3') &&
      $('#footerCardSelected3').attr('id', 'footerCard3')
  }
})

// INTERACTIVE IMAGE

$('#buttonTop').click(function () {
  $('#yellowCircle').toggle()
  if ($('#yellowCircle').is(':visible')) {
    $('#buttonTop').attr('id', 'buttonTopClose')
  } else {
    $('#buttonTopClose').attr('id', 'buttonTop')
  }
})

$('#buttonLeft').click(function () {
  $('#redCircle').toggle()
  if ($('#redCircle').is(':visible')) {
    $('#buttonLeft').attr('id', 'buttonLeftClose')
  } else {
    $('#buttonLeftClose').attr('id', 'buttonLeft')
  }
})

$('#buttonRight').click(function () {
  $('#grayCircle').toggle()
  if ($('#grayCircle').is(':visible')) {
    $('#buttonRight').attr('id', 'buttonRightClose')
  } else {
    $('#buttonRightClose').attr('id', 'buttonRight')
  }
})
