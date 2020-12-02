const Turn = require('../src/Turn')

class Round {
  constructor( deck ) {
    this.deck = deck
    this.turns = 0
    this.currentCard = deck.cards[0]
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn( playerGuess ) {
    const turn = new Turn( playerGuess, this.currentCard )
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    const feedback = turn.giveFeedback()
    this.turns += 1
    this.currentCard = this.deck.cards[this.turns]

    return feedback
  }

  calculatePercentCorrect() {

  }

  endRound() {
    // prints round over and percent correct message
  }
}

module.exports = Round
