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

  evaluateGuess() {
    if (this.playerGuess === this.card.correctAnswer) {
      return true
    }
    return false
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return `correct!`
    }
    return `incorrect!`
  }
}

module.exports = Turn
