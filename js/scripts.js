// ***************Back End***************
var design = 0
var java = 0
var web = 0
var track = ""

var randomTrack = [
  'CSS/Design',
  'Android/java',
  'Ruby/Rails'
]
var pickTrack = function () {
  var track = randomTrack[Math.floor(Math.random() * 3)];
  return track
}

function getRandomName(list) {
  return Math.floor(Math.random() * list.length);
}

var multiChoice = function(answer) {
  if (answer === 'design') {
    design ++;
  } else if (answer === 'java'){
    java ++;
  } else if (answer === 'all'){
    design ++;
    java ++;
    web ++;
  } else if (answer === 'ruby'){
    web++;
  }return design, java, web
}

var scaleChoice = function(answer) {
  if (answer === 'java + 2') {
    java += 2;
  } else if (answer === 'java + 1') {
    java ++;
  } else if (answer === 'java - 1') {
    java -= 1;
  } else if (answer === 'java - 2') {
    java -= 2;
  } else if (answer === 'design + 2') {
    design += 2;
  } else if (answer === 'design + 1') {
    design ++;
  } else if (answer === 'design - 1') {
    design -= 1
  } else if (answer === 'design - 2') {
    design -= 2
  } return design, java, web
}

var results = function() {
  if (design > java && design > web) {
    track = 'You should take CSS/Design!'
  } else if (java > design && java > web) {
    track = 'You should take Android/java'
  } else if (web > design && web >java) {
    track = 'You should take Ruby/Rails!'
  } else if (web = design) {
    track = 'You tied between CSS/Design and Ruby/Rails'
  } else if (web = java) {
    track = 'You tied between Android/java and Ruby/Rails'
  } else if (design = java) {
    track = 'You tied CSS/Design and Android/java and Ruby/Rails'
  } else {
    track = 'Haha very funny, now go back and fill in some answers'
  } return track
}

// ***************Front End***************
  $(function() {
    $('#randoButton').click(function(event) {
      var rando = pickTrack();
      $("#randomize").text(rando).hide().fadeIn(3000);
    });

    $('#submitButton').click(function(event) {
      var studentName = $('#nameInput').val();
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
