//challange 1: your age in days\

function ageInDays() {
    var birthyear = prompt("Which Year Were You Born.... Good Friend?");
    var ageInDayss = (2020 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You Are' + ' ' + ageInDayss + ' ' + 'Days Old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    }
    
    function reset() {
        document.getElementById('ageInDays').remove();
    }
    
    //challange 2: cat genrator
    function generateCat() {
        var image = document.createElement('img');
        var div = document.getElementById('flex-cat-gen');
        image.src ="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
        div.appendChild(image);
    }
    
    // challange 3: rock, paper, scissors 
    function rpsGames(yourChoice){
        console.log(yourChoice);
    
        var humanChoice, botChoice;
        humanChoice = yourChoice.id;
    
        botChoice = numberToChoice(randToRpsInt());
        console.log('computerChoice',botChoice);
    
        results = decideWinner(humanChoice, botChoice);
        console.log(results);
    
        message = finalMessage(results);
        console.log(message);
    
        rpsFrontEnd(yourChoice.id, botChoice, message);
    }
    
    function randToRpsInt() {
        return Math.floor(Math.random() * 3);
    }
    
    function numberToChoice(number) {
        return ['rock', 'paper', 'scissors'][number];
    }
    
    function decideWinner(yourChoice, computerChoice) {
        var rpsDataBase = {
            'rock':{'scissors':1, 'rock':0.5, 'paper':0},
            'paper':{'rock':1, 'paper':0.5, 'scissors':0},
            'scissors':{'paper':1,  'scissors':0.5, 'rock':0}
        };
    
        var yourScore = rpsDataBase[yourChoice] [computerChoice]
        var computerScore = rpsDataBase[computerChoice] [yourChoice]
    
        return [yourScore, computerScore];
    }
    
    function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message':'You Lost!', 'color':'red'};
        }else if (yourScore === 0.5) {
            return {'message':'You Tied!', 'color':'yellow'};
        }else {
                return {'message':'You Won!', 'color':'green'};
            }
    }
    
    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
        var imagesDatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        }
        //let's remove all the images 
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
    
        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');
    
        humanDiv.innerHTML = "<img src ='" + imagesDatabase[humanImageChoice] + "' height=150, width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
        messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
        botDiv.innerHTML = "<img src ='" + imagesDatabase[botImageChoice] + "' height=150, width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    
        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
    }
    
    //challange 4: change the color of all buttons 
    var all_buttons = document.getElementsByTagName('button');
    console.log(all_buttons);
    
    var copyAllButtons = [];
    for (let i = 0; i < all_buttons.length; i++) {
        copyAllButtons.push(all_buttons[i].classList[1]);
    }
    
    console.log(copyAllButtons);
    
    function buttonColorChange(buttonThingy) {
        if (buttonThingy.value === 'red') {
            buttonsRed() ;
        }else if (buttonThingy.value === 'green') {
            buttonsGreen() ;
        }else if (buttonThingy.value === 'reset') {
            buttonColorReset() ;
        }else if (buttonThingy.value === 'random') {
            randomColors() ;
        }
    }
    
    function buttonsRed() {
        for (let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
        }
    }
    
    function buttonsGreen() {
        for (let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-success');
        }
    }
    
    function buttonColorReset () {
        for (let i=0; i < all_buttons.length; i++) {
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copyAllButtons[i]);
        }
    } 
    
    function randomColors() {
        var Choices = ['btn-primary', 'btn-danger', 'btn-succes', 'btn-warning']
    
        for (let i=0; i < all_buttons.length; i++) {
            var randomNumber = Math.floor(Math.random() * 4);
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(Choices[randomNumber]);
        }
    
    }
    
    //challange 5: blackjack 
    let blackjackGame = {
        'you': {'scoreSpan':'#your-blackjack-result', 'div':'#your-box', 'score':0},
        'dealer': {'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box', 'score':0},
        'card' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
        'cardsMap' : {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'Q':10, 'J':10, 'A':[1, 11]},
        'wins': 0,
        'losses': 0,
        'draws' : 0,
        'isStand' : false,
        'turnsOver': false,
    
    };
    
    const YOU = blackjackGame['you']
    const DEALER = blackjackGame['dealer']
    
    const hitSound = new Audio ('C:/Users/user/Desktop/New folder/sounds/swish.mp3');
    const winSound = new Audio ('C:/Users/user/Desktop/New folder/sounds/cash.mp3');
    const lossSound = new Audio ('C:/Users/user/Desktop/New folder/sounds/aww.mp3');
    
    document.querySelector('#blackjack-hit-button').addEventListener('click', blacjackHit);
    
    document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
    
    document.querySelector('#blackjack-deal-button').addEventListener('click', blacjackDeal);
    
    
    
    function  blacjackHit() {
        if (blackjackGame['isStand'] === false) {
            let card =randomCard();
            showCard(card, YOU);
            updateScore(card, YOU);
            showScore(YOU);
        }
    }
    
    function randomCard() {
        let randomIndex = Math.floor(Math.random() * 13);
        return blackjackGame['card'][randomIndex];
    }
    
    function showCard(card, activePlayer) {
        if (activePlayer['score'] <= 21) {
            let cardImage = document.createElement('img')
            cardImage.src = `G:/my projects/project 2/images/${card}.png`;
            document.querySelector(activePlayer['div']).appendChild(cardImage) ;
            hitSound.play();
        }
    }
    
    function blacjackDeal() {
    if (blackjackGame['turnsOver'] === true) {
    
        blackjackGame['isStand'] = false;
        let yourImages =document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages =document.querySelector('#dealer-box').querySelectorAll('img');
        for (i=0; i< yourImages.length; i++) {
            yourImages[i].remove();
        }
    
        for (i=0; i< dealerImages.length; i++) {
            dealerImages[i].remove();
        }
    
        YOU['score'] = 0;
        DEALER['score'] = 0;
    
        document.querySelector('#your-blackjack-result').textContent =  0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#blackjack-result').textContent = "Let's Play";
    
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';
        document.querySelector('#blackjack-result').style.color = '#212529';
    
        
        }
    }
    
    function updateScore(card, activePlayer) {
        if (card === 'A') {
        // if adding 11 keeps me below 21, add 11, otherwise add 1 
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
            }else {
                activePlayer['score'] += blackjackGame['cardsMap'][card][0];
            }
        }else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
        }
    }
    
    function showScore(activePlayer) {
    
        if (activePlayer['score'] > 21) {
            document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
            document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
        } else {
            document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
            document.querySelector(activePlayer['scoreSpan']).style.color ='white';
        }
    }
    
    function sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function dealerLogic() {
        blackjackGame['isStand'] = true;
    
     // if you want a 2 player game  remove the while loop
        while(DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
            let cards = randomCard();
            showCard(cards, DEALER);
            updateScore(cards, DEALER);
            showScore(DEALER);
            await sleep(1000);
        }
    
        if (DEALER['score'] > 15) {
            blackjackGame['turnsOver'] = true;
            let winner = computeWinner();
            showResult(winner);
        }
    }
    
    // compute winner and return who just won
    function computeWinner() {
        let winner;
    
        if (YOU['score'] <= 21) {
            if (YOU['score'] > DEALER['score']  || (DEALER['score'] > 21)) {
                blackjackGame['wins']++;
                winner = YOU;
            } else if (YOU['score'] < DEALER['score']) {
                blackjackGame['losses']++;
                winner = DEALER;
            } else if (YOU['score'] === DEALER['score']) {
                blackjackGame['draws']++;
            }
    
    
        } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
            blackjackGame['losses']++;
            winner = DEALER;
    
        }else if (YOU['score'] > 21 && DEALER['score'] > 21) {
            blackjackGame['draws']++;
        }
        console.log(blackjackGame);
        return winner;
    }
    
    function showResult(winner) {
    
            let messages, messageColor;
    
            if (winner === YOU) {
                document.querySelector('#wins').textContent = blackjackGame['wins'];
                messages = 'You Won!';
                messageColor = 'green';
                winSound.play();
        
            }else if (winner === DEALER) {
                document.querySelector('#losses').textContent = blackjackGame['losses'];
                messages = 'You Lost!';
                messageColor = 'red';
                lossSound.play();
        
            }else {
                document.querySelector('#draws').textContent = blackjackGame['draws'];
                messages = 'You Drew!';
                messageColor = 'black';
            }
        
            document.querySelector('#blackjack-result').textContent = messages;
            document.querySelector('#blackjack-result').style.color = messageColor;
    }