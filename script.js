const gameContainer = document.getElementById('game');
let timer = document.querySelector('#timer');
let start = document.querySelector('#start');
let reset = document.querySelector('#reset');
let flipped = document.querySelector('.flipped');

let cardFlipCounter= 0;
let clockCounter = 0;
let flipCounter = 0;
let card1 = null;
let card2 = null;

const COLORS = [
    "red",
    "blue",
     "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];

function shuffle(arr) {
    let counter = arr.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArr) {
    for(let color of colorArr) {
        const newDiv = document.createElement('div');

        newDiv.classList.add(color);

        newDiv.addEventListener('click', handleCardClick);

        gameContainer.append(newDiv);
    }
}

// TODO: Implement this function!

document.getElementById('game').style.pointerEvents = 'none';
start.addEventListener('click', function() {
    document.getElementById('game').style.pointerEvents = 'auto';
    setInterval(function() {
        timer.innerHTML = 'Timer : ' + clockCounter++;
    }, 1000);
});

function handleCardClick(e) {
    flipCounter++;
    if(flipCounter === 1) {
        card1 = e.target;
        card1.style.backgroundColor = e.target.classList[0];
        card1.classList.add('flipped');
        card1.removeEventListener('click', handleCardClick);
    }
    else {
        document.getElementById('game').style.pointerEvents = 'none';
        card2 = e.target;
        card2.style.backgroundColor = e.target.classList[0];
        card2.classList.add('flipped');
        card2.removeEventListener('click', handleCardClick);

        if(card1.className === card2.className){
            cardFlipCounter += 2;
            card1.classList.add('match');
            console.log(card1, card2);
            card1.addEventListener('click', handleCardClick);
            card2.addEventListener('click', handleCardClick);
            card1 = null;
            card2 = null;
            flipCounter = 0;
            document.getElementById('game').style.pointerEvents = 'auto';
        }
        else {
            setTimeout(function() {
                card1.style.backgroundColor = '';
                card2.style.backgroundColor = '';
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1 = null;
                card2 = null;
                document.getElementById('game').style.pointerEvents = 'auto';
                flipCounter = 0;
            }, 500);
            card1.addEventListener('click', handleCardClick);
            card2.addEventListener('click', handleCardClick);
        }
    }
    if(cardFlipCounter === 10) {
        setTimeout(function() {
            alert('You Finished The Game. Congrats!');
            timer = 0;
        }, 200);
    }
}

createDivsForColors(shuffledColors);