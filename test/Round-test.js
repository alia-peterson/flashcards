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

  it('should increase the turn counter', function() {
    expect(round.turns).to.equal(0)
    round.takeTurn()
    expect(round.turns).to.equal(1)
  })

  it('should update the current card', function() {
    expect(round.currentCard).to.equal(card1)
    round.takeTurn()
    expect(round.currentCard).to.equal(card2)
  })

  it('should evaluate the guess', function() {
    const guess1 = round.takeTurn('correct')
    expect(guess1).to.equal(`That's correct!`)

    const guess2 = round.takeTurn('something')
    expect(guess2).to.equal(`That's incorrect, try again!`)
  })

  it('should store the incorrect guesses', function() {
    const guess1 = round.takeTurn('correct')
    expect(round.incorrectGuesses.length).to.equal(0)

    const guess2 = round.takeTurn('something')
    expect(round.incorrectGuesses[0]).to.equal(4)
  })

  it('should calculate the percent of correct answers', function() {
    expect(round.calculatePercentCorrect()).to.equal(0)

    const guess1 = round.takeTurn('correct')
    expect(round.calculatePercentCorrect()).to.equal(100)

    const guess2 = round.takeTurn('something')
    expect(round.calculatePercentCorrect()).to.equal(50)
  })

})
