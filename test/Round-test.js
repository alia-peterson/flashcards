const chai = require('chai')
const expect = chai.expect

const Round = require('../src/Round')

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round()
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function() {
    const round = new Round()
    expect(round).to.be.an.instanceof(Round)
  })

  it.skip('should store the deck of cards', function() {
    const card1 = new Card(1, 'Question1', ['close', 'correct', 'wrong'], 'Correct')
    const card2 = new Card(4, 'Question2', ['a', 'b', 'c'], 'c')
    const card3 = new Card(6, 'Question3', ['cat', 'dog', 'horse'], 'cat')
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck)

    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it.skip('should return the current card', function() {

  })

  it.skip('should create a new turn instance', function() {
    // take turn
  })

  it.skip('should increase the turn counter', function() {

  })

  it.skip('should update the current card', function() {

  })

  it.skip('should store the incorrect guesses', function() {

  })

  it.skip('should provide feedback based on answer', function() {

  })

  it.skip('should calculate the percent of correct answers', function() {
    // should also print game over message
  })

})
