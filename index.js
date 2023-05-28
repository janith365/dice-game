// event listener on h1 (roll the dice when clicked on the header)
document.querySelector("h1").addEventListener("click", function () {
  // generate random number for dice1
  var dice1 = Math.floor(Math.random() * 6) + 1;
  // image based on rolled number
  var dice1Img = "./images/dice" + dice1 + ".png";
  // change the src attribute to new image
  document.querySelector(".img1").setAttribute("src", dice1Img);

  // generate random number for dice2
  var dice2 = Math.floor(Math.random() * 6) + 1;
  // image based on rolled number
  var dice2Img = "./images/dice" + dice2 + ".png";
  // change the src attribute to new image
  document.querySelector(".img2").setAttribute("src", dice2Img);

  // logic to determine which player won
  if (dice1 > dice2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
  } else if (dice2 > dice1) {
    document.querySelector("h1").textContent = "Player 2 wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
});
