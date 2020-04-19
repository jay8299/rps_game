let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");

const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result>p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function compchoice() {
  const a = ["r", "p", "s"];
  const b = Math.floor(Math.random() * 3);
  return a[b];
}
function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}
function win(user, comp) {
  userscore++;
  userscore_span.innerHTML = userscore;
  compscore_span.innerHTML = compscore;
  const smallcomp = "Comp".fontsize(4).sub();
  const smalluser = "User".fontsize(4).sub();
  const userchoice_div = document.getElementById(user);
  result_div.innerHTML = `${convert(user)}${smalluser} beats ${convert(
    comp
  )}${smallcomp}.  YOU WIN!`;
  userchoice_div.classList.add("green-glow");

setTimeout(() => {
    userchoice_div.classList.remove("green-glow");
},500);
}

function lost(user, comp) {
  compscore++;
  userscore_span.innerHTML = userscore;
  compscore_span.innerHTML = compscore;
  const smalluser = "User".fontsize(4).sub();
  const smallcomp = "Comp".fontsize(4).sub();
  const userchoice_div = document.getElementById(user);
  result_div.innerHTML = `${convert(user)}${smalluser} beats ${convert(
    comp
  )}${smallcomp}.  YOU LOST!`;
  userchoice_div.classList.add("red-glow");

  setTimeout(() => {
    userchoice_div.classList.remove("red-glow");
},500);

}

function tie(user, comp) {
  userscore_span.innerHTML = userscore;
  compscore_span.innerHTML = compscore;
  const smalluser = "User".fontsize(4).sub();
  const smallcomp = "Comp".fontsize(4).sub();
  const userchoice_div = document.getElementById(user);
  result_div.innerHTML = `${convert(user)}${smalluser} cancels ${convert(
    comp
  )}${smallcomp}.  ITS DRAW!`;
  userchoice_div.classList.add("grey-glow");
  setTimeout(() => {
    userchoice_div.classList.remove("grey-glow");

},500);
}

function game(userchoice) {
  const computerchoice = compchoice();
  switch (userchoice + computerchoice) {
    case "pr":
    case "sp":
    case "rs":
      win(userchoice, computerchoice);
      break;
    case "ps":
    case "rp":
    case "sr":
      lost(userchoice, computerchoice);
      break;
    case "pp":
    case "ss":
    case "rr":
      tie(userchoice, computerchoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scissors_div.addEventListener("click", () => {
    game("s");
  });
}
main();
