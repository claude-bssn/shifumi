let tabComputer= ['rock','paper', 'scissors']; 
let pointTotal = 0;
let computerPoint = 0;
let playerChoice;
let computerChoice;
let win;
let addRound=0;

function randomChoice(tabComputer)
    {
        return tabComputer[Math.floor(Math.random()*tabComputer.length)];
    }
function checkResult() 
    {
        if (playerChoice==computerChoice){
            win = 'Match Nul'
        } else if ((playerChoice== 'scissors' && computerChoice == 'paper') || (playerChoice== 'paper' && computerChoice == 'rock') || (playerChoice== 'rock' && computerChoice == 'scissors')){
            win = true;
        }else{
            win = false;
        }
    }
function computerDisplay()
    {
        if (computerChoice === 'rock'){
            document.querySelector('.rockComputer').style.display = 'flex';
            document.querySelector('.paperComputer').style.display = 'none';
            document.querySelector('.scissorsComputer').style.display = 'none';
        }else if (computerChoice === 'paper'){
            document.querySelector('.paperComputer').style.display = 'flex';
            document.querySelector('.scissorsComputer').style.display = 'none';
            document.querySelector('.rockComputer').style.display = 'none';
        }else if (computerChoice === 'scissors'){
            document.querySelector('.scissorsComputer').style.display = 'flex';
            document.querySelector('.paperComputer').style.display = 'none';
            document.querySelector('.rockComputer').style.display = 'none';
        }
    }
function countPoint(win)
    { 
        document.querySelector('.nul').innerHTML = " ";
        
        if (win == true){
            pointTotal++;
            return document.querySelector('.point').innerHTML = pointTotal;
        }else if (win == 'Match Nul'){
            document.querySelector('.nul').style.display = 'flex';
            return document.querySelector('.nul').innerHTML = " Match Nul !";
        }
        else if ( win == false){
            computerPoint++
            return document.querySelector('.loosePoint').innerHTML = computerPoint;
        }
    }
function countRound()
    {
        addRound++
        return document.querySelector('.round').innerHTML = addRound;
    }
function endGame()
    {
        if (pointTotal === 3){
            document.querySelector('.boardGame').style.display = 'none';
            document.querySelector('.endResult').style.display = 'flex';
            document.querySelector('.result').innerHTML='YOU WON!';
            document.querySelector('.result').style.color = '#2fc92f';
            document.querySelector('.result').style.textShadow = '0px 0px 50px rgb(95, 247, 105), 0px 0px 25px green, 0px 0px 2px rgb(4, 71, 4)';
        }else if (computerPoint===3){
            document.querySelector('.boardGame').style.display = 'none';
            document.querySelector('.endResult').style.display = 'flex';
            document.querySelector('.result').innerHTML='YOU LOOSE!';
            document.querySelector('.result').style.color = '#ff0000';
            document.querySelector('.result').style.textShadow = 'rgb(255 1 1) 0px 0px 50px, maroon 0px 0px 25px, rgb(71 4 4) 0px 0px 2px';
        }
    }
document.querySelector('.paper').addEventListener('click',() => {
    playerChoice=document.querySelector('#paper').id;
    computerChoice = randomChoice(tabComputer);
    computerDisplay();
    checkResult();
    countPoint(win);
    countRound();
    endGame();
});
document.querySelector('.rock').addEventListener('click',() => {
    playerChoice=document.querySelector('#rock').id;
    computerChoice = randomChoice(tabComputer);
    computerDisplay();
    checkResult();
    countPoint(win);
    countRound();
    endGame();
});
document.querySelector('.scissors').addEventListener('click',() => {
    playerChoice=document.querySelector('#scissors').id;
    computerChoice = randomChoice(tabComputer);
    computerDisplay();
    checkResult();
    countPoint(win);
    countRound();
    endGame();
});
