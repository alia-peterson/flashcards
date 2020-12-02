class Turn {
  constructor( playerGuess, card ) {
    this.playerGuess = playerGuess
    this.card = card
  }

  returnGuess() {
    return this.playerGuess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess(turn, card) {
    if (this.playerGuess === card.correctAnswer) {
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
