// Hide the number output if no number is defined
if (model.get('number') == undefined) {
  $('#number-output').hide();
}


$('#number-input').on('keyup', function() {
  console.log(this.value);
  model.set('number', this.value);
});

// Show or hide the number output, depending on whether a
// number is given or not
model.listen('number', function() {
  if (model.get('number') == undefined) {
    $('#number-output').hide();
  } else {
    $('#number-output').show();
  }
});

// Get the number and set it to the link
model.listen('number', function() {
  $('[data-number-output]').text(model.get('number'));
});
