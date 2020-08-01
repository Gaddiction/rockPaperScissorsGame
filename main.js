// caching the dom
const buttons = document.querySelectorAll(".circle");
const heading = document.querySelector("h1");
const playerScore = document.getElementsByClassName("player");
const compScore = document.getElementsByClassName("comp");
let score1 =0;
let score2 =0;
buttons.forEach(function(btn){
  btn.addEventListener("click",function(){
    main(btn);
  })
});
function main(btn){
  const options = ["rock","paper","scissors"];
  const compChosen = options[Math.floor(Math.random() * 3)];
  const userChosen = btn.getAttribute("id");
  switch(compChosen + userChosen){
// winning cases for users
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
    score1++;
    animate(btn,"win-glow");
    heading.innerHTML = `Comp chooses ${compChosen}.You win 🎉🎊`;
    // console.log("win");
playerScore.innerText = score1;
    break;
// losing cases
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
    score2++;
    animate(btn,"lose-glow");

    compScore.innerText = score2;
    heading.innerHTML = `Comp chooses ${compChosen}.You  Lost!💩💩`;
    // console.log('lose');
    break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    animate(btn,"tie-glow");
    heading.innerHTML = `Comp chooses ${compChosen}.Match Tied..`;

    // console.log("tie");
    break;
  }
}
function animate(btn,glow){
  btn.classList.add(glow);
  setTimeout(function(){
    btn.classList.remove(glow);
  },200);
}
