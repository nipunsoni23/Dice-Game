let dice1, dice2, src1, src2;
function dicegame() {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  src1 = "d" + dice1 + ".png";
  src2 = "d" + dice2 + ".png";
  document.querySelector(".img1").src = src1;
  document.querySelector(".img2").src = src2;
  //document.getElementsByClass("head").style.color = "pink";


  if (dice1 > dice2) {
    document.getElementById("head").innerHTML = '<img id="flag" src= "win.png"> ' + "Player 1 Wins!";

  }
  else if (dice1 == dice2) {
    document.getElementById("head").innerHTML = "Draw!";
  }
  else {
    document.getElementById("head").innerHTML = "Player 2 Wins!" + ' <img id="flag" src= "win.png">';
  }
  console.log(dice1, dice2);
}