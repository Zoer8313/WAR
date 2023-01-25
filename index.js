class Game {
    constructor() { 
    
    } 

    playGame() {

        const deck = new Deck();
        deck.createDeck();
      
        deck.shuffleDeck();
                                 //value                  name          score
        let player1 = new Player(deck.deck.splice(0, 26), "Player One", 0); //splits deck in half
        
        let player2 = new Player(deck.deck, "Player Two", 0); //don't have to splice cuz only 26 cards left

        for(let i = 0; i < player1.hand.length; i++) { //points scoring loop
            
            if(player1.hand[i].value > player2.hand[i].value) {
                player1.score = player1.score + 1;
                console.log("Player One wins this round!");
                console.log("Player One Score: " + player1.score + "  Player Two Score: " + player2.score);
                console.log(`
                `);
            } else if (player2.hand[i].value > player1.hand[i].value) {
                player2.score = player2.score + 1;
                console.log("Player Two wins this round!");
                console.log("Player One Score: " + player1.score + "  Player Two Score: " + player2.score);
                console.log(`
                `);
            } else {
                console.log("Players tie- No points awarded.");
                console.log("Player One Score: " + player1.score + "  Player Two Score: " + player2.score);
                console.log(`
                `);
            }
        }
        //declare winner based on player w/ highest score
        if(player1.score > player2.score) {
            console.log(`
            ==========================
            Player One Wins the Game!
            ==========================`);
        } else if (player2.score > player1.score) {
            console.log(`
            ==========================
            Player Two Wins the Game!
            ==========================`);
        } else {
            console.log(`
            ===============================
            The Game is a Tie! Play again?
            ===============================`);
        }
    }//end of play game function
}//end of game class


class Deck {
    constructor() {
      this.deck = [];
    }
  
    createDeck() {
      const suits = [':clubs:', ':diamonds:', ':hearts:', ':spades:'];
      const ranks = [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K'
      ]
  
      for (var suitCounter = 0; suitCounter < suits.length; suitCounter++) { //changed from suits < 4  we were forcing it to create card objects
        for (var rankCounter = 0; rankCounter < ranks.length; rankCounter++) { //changed from ranks <13; they just read as "undefined"
            let card = new Card(rankCounter + 1, ranks[rankCounter], suits[suitCounter]) //+1 is assigning rank so A !=0
          this.deck.push(card)
        }
      } //for a test case, would have to make "undefined" not count as a card. Define what a "good" shuffle is.
    }

    shuffleDeck() {
        const deckIWantToShuffle = this.deck;

            for (let i = deckIWantToShuffle.length -1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1)); //Fisher-yates algorithm
                const temp = deckIWantToShuffle[i];
                deckIWantToShuffle[i] = deckIWantToShuffle[j];
                deckIWantToShuffle[j] = temp; 
            } 
            return deckIWantToShuffle; 
    }
  } //end of Deck class
  
 
  class Card{
        constructor(value, rank, suit) {
            this.value= value;
            this.rank = rank;
            this.suit = suit;
        }
  }//end of card class


class Player {
    constructor(hand, name, score) { //score will start at 0
        this.hand = hand;
        this.name = name;
        this.score = score; //some summing here i'm sure, (let sum = 0); (sum = sum + score) or whatever
    }
}//end of player class

const deck = new Deck();
  deck.createDeck();

  deck.shuffleDeck();
  console.log(deck.shuffleDeck());

  const game = new Game();
  game.playGame();