const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')
const Card = require('./Card')
const Round = require('./Round')
const Deck = require('./Deck')

class Game {
  constructor() {
    this.deck = null
  }

  printMessage( deck ) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion( round ) {
    util.main( round, this )
  }

  start( cardDataSet ) {
    this.deck = new Deck()
    this.prepareDeck( cardDataSet )

    const round = new Round( this.deck )
    this.printMessage( this.deck )
    this.printQuestion( round )
  }

  prepareDeck( cardIDs ) {
    let cardList = prototypeQuestions
    if ( cardIDs ) {
      cardList = prototypeQuestions.filter( cardData => {
        return cardIDs.includes( cardData.id )
      })
    }

    cardList.forEach( cardData => {
      let card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer)
      this.deck.cards.push( card )
    })
  }
}

module.exports = Game
