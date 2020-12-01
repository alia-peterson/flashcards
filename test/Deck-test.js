const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck()
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', function() {
    const card = new Card(1, 'Question', ['close', 'correct', 'wrong'], 'Correct')
    const deck = new Deck(card)

    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should store an array of cards', function() {
    const card1 = new Card(1, 'Question1', ['close', 'correct', 'wrong'], 'Correct')
    const card2 = new Card(4, 'Question2', ['a', 'b', 'c'], 'c')
    const card3 = new Card(6, 'Question3', ['cat', 'dog', 'horse'], 'cat')
    const deck = new Deck([card1, card2, card3])

    expect(deck.cards).to.deep.equal([card1, card2, card3])
  })

  it('should store the correct number of cards', function() {
    const card1 = new Card(1, 'Question1', ['close', 'correct', 'wrong'], 'Correct')
    const card2 = new Card(4, 'Question2', ['a', 'b', 'c'], 'c')
    const card3 = new Card(6, 'Question3', ['cat', 'dog', 'horse'], 'cat')
    const deck = new Deck([card1, card2, card3])

    expect(deck.countCards()).to.equal(3)
  })

})
