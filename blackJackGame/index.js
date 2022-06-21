let player = {
    name : 'Bob',
    chips : 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    if(number === 1) {
        return 11;
    } else if(number >= 11 && number <= 13) {
        return 10;
    } return number;
}

function startGame() {
    cards=[];
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    hasBlackJack = false;
    isAlive = true;
    renderGame();
}
function renderGame() {
    document.getElementById("cards-el").textContent = 'Cards :';
    for(let i = 0;i < cards.length; ++i) document.getElementById("cards-el").textContent += ` ${cards[i]}`;
    document.getElementById("sum-el").textContent = `Sum : ${sum}`;
    if(sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    document.getElementById("message-el").textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!");
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    } 
}