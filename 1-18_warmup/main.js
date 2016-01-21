var randomNumber = Math.floor(Math.random()*100) + 1;
var prediction = prompt ("Guess a number between 1 and 100");
prediction = parseInt(prediction);
var guess = true;

while (guess) {
  if (prediction > randomNumber) {
    prompt ("Guess again, number is too high");
  } else if (prediction < randomNumber) {
    prompt ("Guess again, number is too low");
  } else if (prediction === randomNumber) {
    alert ("You are correct!");
  }
} document.write(randomNumber);

//whoops, this is suppose to be a form submission, not prompt

/*document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var num = document.getElementById('number').value;
  console.log(num);
});*/
