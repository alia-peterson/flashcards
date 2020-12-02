const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', function() {
  let card, turn1, turn2

  beforeEach(function() {
    card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    turn1 = new Turn('b', card)
    turn2 = new Turn('a', card)
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn)
  })

  it('should store a guess', function() {

    expect(turn1.playerGuess).to.deep.equal('b')
  })

  it('should store a card', function() {
    expect(turn1.card).to.deep.equal(card)
  })

  it('should return the player guess', function() {
    const guess = turn1.returnGuess()

    expect(guess).to.equal('b')
  })

  it('should return the card object', function() {
    const turnCard = turn1.returnCard()

    expect(turnCard).to.equal(card)
  })

  it('should evaluate player guess', function() {
    const guess1 = turn1.evaluateGuess(card)
    const guess2 = turn2.evaluateGuess(card)

    expect(guess1).to.equal(true)
    expect(guess2).to.equal(false)
  })

  it('should provide feedback to player', function() {
    const feedback1 = turn1.giveFeedback()
    const feedback2 = turn2.giveFeedback()

    expect(feedback1).to.equal(`That's correct!`)
    expect(feedback2).to.equal(`That's incorrect, try again!`)
  })

})
