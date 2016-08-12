// ***************Back End***************
var design = 0
var javascript = 0
var web = 0
var track = ""

var multiChoice = function(answer) {
  if (answer === 'design') {
    design ++;
  } else if (answer === 'javascript'){
    javascript ++;
  } else if (answer === 'all'){
    design ++;
    javascript ++;
    web ++;
  } else if (answer === 'ruby'){
    web++;
  }return design, javascript, web
}

//probably a way to shorten this
var scaleChoice = function(answer) {
  if (answer === 'javascript + 2') {
    javascript += 2;
  } else if (answer === 'javascript + 1') {
    javascript ++;
  } else if (answer === 'javascript - 1') {
    javascript -= 1;
  } else if (answer === 'javascript - 2') {
    javascript -= 2;
  } else if (answer === 'design + 2') {
    design += 2;
  } else if (answer === 'design + 1') {
    design ++;
  } else if (answer === 'design - 1') {
    design -= 1
  } else if (answer === 'design - 2') {
    design -= 2
  } return design, javascript, web
}

var results = function() {
  if (design > javascript && design > web) {
    track = 'you should take CSS/Design!'
  } else if (javascript > design && javascript > web) {
    track = 'you should take Android/Java'
  } else if (web > design && web >javascript) {
    track = 'you should take Ruby/Rails!'
  } else {
    track = 'you are indecisive'
  } return track
} //figure out tie logic

// ***************Front End***************
  $(function() {
    $('#submitButton').click(function(event) {
      var an1 = $('input[name=q1]:checked').val();
      var an2 = $('input[name=q2]:checked').val();
      var an3 = $('input[name=q3]:checked').val();
      var an4 = $('input[name=q4]:checked').val();
      var an5 = $('input[name=q5]:checked').val();
      (multiChoice(an1) + multiChoice(an2) + scaleChoice(an3) + scaleChoice(an4) + multiChoice(an5));
      $("#results").text(results());
      event.preventDefault();
    });
  });
