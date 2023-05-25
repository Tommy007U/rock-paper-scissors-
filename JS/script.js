let userScore = 0;
let computerScore = 0;
// create variables that will be used on the project
let userScore_span = document.querySelector("#user-score");
let computerScore_span = document.querySelector("#computer-score");
let result_div = document.querySelector(".result > p");
const select_div = document.querySelector("#selections");
const rock_div = document.querySelector("#R");
const paper_div = document.querySelector("#P");
const scissors_div = document.querySelector("#S");

// f(x) cptrchoice that will give random nbr

function getComputerChoice(){
  const choices =["Rock", "paper", "Scissors"];
  const rundomNumber= Math.floor(Math.random()*3);
  return choices[rundomNumber];
}
function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML = computerScore;
  // add 2 variab to specify  the picks of players
  let smallUserWord = "user".fontsize(2).sub();
  let smallCompWord = "comp".fontsize(2).sub();  
  //result_div.innerHTML=userChoice + " beats " + computerChoice + " . You win"; or 
   result_div.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord} .You Win!!`
  //console.log("WIN"); to test on console
 // document.getElementById(userChoice).classList.add(".green-glow");

}
function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML= userScore
  computerScore_span.innerHTML=computerScore;
  
  let smallUserWord = "user".fontsize(2).sub();
  let smallCompWord = "comp".fontsize(2).sub();

   result_div.innerHTML = `${userChoice}${smallUserWord} loses ${computerChoice}${smallCompWord} . you lost !!`
}

function draw(userChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
     
   result_div.innerHTML = `${userChoice} equal to ${computerChoice} . Its a draw !!`
}
// testconsole.log(getComputerChoice());

//f(x) userchoice
function game(userChoice){
  //console.log("there you go!" + userChoice);
  const computerChoice = getComputerChoice();

    //console.log("user choice => " + userChoice) console.log("computer choice => " + computerChoice)

  //switch statement to pick win n loose or draw
  switch( userChoice + computerChoice){
     case "RockScissors":
     case "PaperRock":
     case "ScissorsPaper":
     win(userChoice, computerChoice);
     break;
     case "RockPaper":
     case "PaperScissors":
     case "ScissorsRock":
     lose(userChoice, computerChoice);
     break;
     case "RockRock":
     case "PaperPaper":
     case "ScissorsScissors":
     draw(userChoice, computerChoice);
     break;
  }
   
}
game()
//adding event listener on the 3 variable fo they can function accordingly
//create (fx) that will hv all the event
function main(){
   rock_div.addEventListener("click", (e)=>{
    //console.log(" you click on Rock");
    //function game to  
   game("Rock")
  });
 
   paper_div.addEventListener("click", (e)=>{
   //console.log("You clicled on Paper ");
   game("Paper")
  });
   scissors_div.addEventListener("click", (e)=>{
   //console.log("You clicked on Scissors");
   game("Scissors")
  });
}

main();







































