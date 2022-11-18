// DROPDOWN

$('#toggleButton1').click(function () {
  $('#textShow1').toggle().css('#textShow1', 'hidden')
  if ($('#textShow1').is(':visible')) {
    $('#toggleButton1').attr('id', 'arrowUpButton1')
  } else {
    $('#arrowUpButton1').attr('id', 'toggleButton1')
  }
})

$('#toggleButton2').click(function () {
  $('#textShow2').toggle()
  if ($('#textShow2').is(':visible')) {
    $('#toggleButton2').attr('id', 'arrowUpButton2')
  } else {
    $('#arrowUpButton2').attr('id', 'toggleButton2')
  }
})

$('#toggleButton3').click(function () {
  $('#textShow3').toggle()
  if ($('#textShow3').is(':visible')) {
    $('#toggleButton3').attr('id', 'arrowUpButton3')
  } else {
    $('#arrowUpButton3').attr('id', 'toggleButton3')
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
