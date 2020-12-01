class Turn {
  constructor( guess, card ) {
    this.guess = guess
    this.card = card
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess(turn, card) {
    if (turn.guess === card.correctAnswer) {
      return true
    }
    return false
  }

  giveFeedback() {
    if (this.evaluateGuess) {
      return `That's correct!`
    }
    return `That's incorrect, try again!`
  }
}

module.exports = Turn
