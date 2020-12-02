const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', function() {
  let card1, card2, card3, deck, currentRound

  beforeEach(function() {
    card1 = new Card(1, 'Question1', ['close', 'correct', 'wrong'], 'correct')
    card2 = new Card(4, 'Question2', ['a', 'b', 'c'], 'c')
    card3 = new Card(6, 'Question3', ['cat', 'dog', 'horse'], 'cat')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round)
  })

  it('should store the deck of cards', function() {
    expect(round.deck).to.deep.equal(deck)
  })

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should create a new turn instance', function() {
    round.takeTurn('correct')
    expect(turn).to.be.an.instanceof(Turn)
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
