let a;
let time;
let date;
let country;

function update(evt) {

    country = evt.target.value;

    if (country == "asia") {
        offset = 5.5;
        setInterval(() => {


            d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            nd = new Date(utc + (3600000 * offset));
            document.getElementById('clock').innerHTML = nd.toLocaleString()

        }, 1000);
    }
    else if (country == "aus") {
        offset = 9.5;
        setInterval(() => {


            d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            nd = new Date(utc + (3600000 * offset));
            document.getElementById('clock').innerHTML = nd.toLocaleString()

        }, 1000);
    }
    else if (country == "north") {
        offset = 4.5;
        setInterval(() => {


            d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            nd = new Date(utc + (3600000 * offset));
            document.getElementById('clock').innerHTML = nd.toLocaleString()

        }, 1000);
    }
    else if (country == "south") {
        offset = 6.5;
        setInterval(() => {

            d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            nd = new Date(utc + (3600000 * offset));
            document.getElementById('clock').innerHTML = nd.toLocaleString();

        }, 1000);
    }
    else if (country == "africa") {
        offset = 7.5;
        setInterval(() => {


            d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            nd = new Date(utc + (3600000 * offset));
            document.getElementById('clock').innerHTML = nd.toLocaleString()

        }, 1000);
    }
    else if (country == "europe") {
        offset = 8.5;
        setInterval(() => {


            d = new Date();
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            nd = new Date(utc + (3600000 * offset));
            document.getElementById('clock').innerHTML = nd.toLocaleString()

        }, 1000);
    }



}

let seconds = 0;
let minutes = 0;
let hours = 0;

let csec = 0;
let cmin = 0;
let chour = 0;


let dissec = 0;
let dismin = 0;
let dishour = 0;

let interval = null;
let status = "stopped"


function stopWatch() {
    interval = setInterval(() => {
        seconds++;


        //Logic to increment

        if (seconds / 60 == 1) {
            seconds = 0;
            minutes++;

            if (minutes / 60 == 1) {
                minutes = 0;
                hours++;
            }

        }

        if (seconds < 10) {
            dissec = "0" + seconds.toString();
        }
        else {
            dissec = seconds;
        }

        if (minutes < 10) {
            dismin = "0" + minutes.toString();
        }
        else {
            dismin = minutes;
        }

        if (hours < 10) {
            dishour = "0" + hours.toString();
        }
        else {
            dishour = hours;
        }

        //Display updated time value to the user
        csec = dissec;
        cmin = dismin;
        chour = dishour;
        document.getElementById("display").innerHTML = dishour + ":" + dismin + ":" + dissec;
        status = "started";


    }, 1000);




}

function stop() {

    if (status = "started") {

        clearInterval(interval);

    }


}

function reset() {

    clearInterval(interval);
    hours = 0;
    seconds = 0;
    minutes = 0;

    document.getElementById('display').innerHTML = "00:00:00";



}

function capture() {
    document.getElementById('set').innerHTML = chour + ":" + cmin + ":" + csec;
}





// game.html

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randoNumber = Math.floor(Math.random()*3);
    return choices[randoNumber];  
}


function game(userChoice){
  let computerChoice = getComputerChoice();
  switch(userChoice){
      case 'r' : 
      if(computerChoice=='p'){
          
          computerScore++;
          document.getElementById('computer-score').innerHTML=computerScore;
          document.getElementById('winner').innerHTML = "Computer"
          document.getElementById('uchoice').innerHTML = "Rock"
          document.getElementById('cchoice').innerHTML = "Paper"
      }
       if(computerChoice == 's'){
          
          userScore++;
          document.getElementById('user-score').innerHTML=userScore;
          document.getElementById('winner').innerHTML = "User"
          document.getElementById('uchoice').innerHTML = "Rock"
          document.getElementById('cchoice').innerHTML = "Scissor"
      }
      if(computerChoice == 'r'){
        document.getElementById('winner').innerHTML = "Tie"
        document.getElementById('uchoice').innerHTML = "Rock"
        document.getElementById('cchoice').innerHTML = "Rock"   
      }
      break;
      case 'p' : 
      if(computerChoice=='s'){
          
          computerScore++;
          document.getElementById('computer-score').innerHTML=computerScore;
          document.getElementById('winner').innerHTML = "Computer"
          document.getElementById('uchoice').innerHTML = "Paper"
          document.getElementById('cchoice').innerHTML = "Scissor"
      }
      if(computerChoice == 'r'){
          
          userScore++;
          document.getElementById('user-score').innerHTML=userScore;
          document.getElementById('winner').innerHTML = "User"
          document.getElementById('uchoice').innerHTML = "Paper"
          document.getElementById('cchoice').innerHTML = "Rock"
      }
      if(computerChoice == 'p'){
        document.getElementById('winner').innerHTML = "Tie"
        document.getElementById('uchoice').innerHTML = "Scissor"
        document.getElementById('cchoice').innerHTML = "Paper"
      }
      break;
      case 's' : 
      if(computerChoice=='r'){
          
          computerScore++;
          document.getElementById('computer-score').innerHTML=computerScore;
          document.getElementById('winner').innerHTML = "Computer"
          document.getElementById('uchoice').innerHTML = "Paper"
          document.getElementById('cchoice').innerHTML = "Paper"
      }
       if(computerChoice == 'p'){
          
          userScore++;
          document.getElementById('user-score').innerHTML=userScore;
          document.getElementById('winner').innerHTML = "User"
          document.getElementById('uchoice').innerHTML = "Scissor"
          document.getElementById('cchoice').innerHTML = "Paper"
      }
      if(computerChoice == 's'){
        document.getElementById('winner').innerHTML = "Tie"
        document.getElementById('uchoice').innerHTML = "Scissor"
        document.getElementById('cchoice').innerHTML = "Scissor"
      }
      break;
  }

  
}



    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })





























