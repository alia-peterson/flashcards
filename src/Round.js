class Round {
  constructor( deck ) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = [] // stores the id of the card that was guessed wrong
  }

  returnCurrentCard() {
    // return card being played
  }

  takeTurn() {
    // new turn instance is created
    // turns count is updated
    // the next card becomes the current card
    // the guess is evaluated/recorded and incorrect guesses are stored
    // feedback is returned based on answer given
  }

  calculatePercentCorrect() {

  }

  endRound() {
    // prints round over and percent correct message
  }
}

module.exports = Round
