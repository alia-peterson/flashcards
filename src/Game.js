const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')
const Card = require('./Card')
const Round = require('./Round')
const Deck = require('./Deck')

class Game {
  constructor() {}

  printMessage( deck ) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion( round ) {
    util.main( round )
  }

  start() {
    const deck = new Deck()
    prototypeQuestions.forEach(( cardData ) => {
      let card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer)
      deck.cards.push( card )
    })
    const round = new Round( deck )
    this.printMessage( deck )
    this.printQuestion( round )
  }
}

module.exports = Game
