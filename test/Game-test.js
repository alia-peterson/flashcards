const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')
const data = require('../src/data')

describe('Game', function() {

  it('should include cards from the dataset', function() {
    // this test should be run with this.printMessage and this.printQuestion
    // calls commented out of the game.start method. otherwise the game
    // will start with the tests

    const game = new Game()
    game.start()
    const gameCardAnswer = game.deck.cards[0].correctAnswer
    const dataCardAnswer = data.prototypeData[0].correctAnswer
    expect(gameCardAnswer).to.equal(dataCardAnswer)
  })

})
