const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
  })

  it('should store a guess', function() {
    const card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    const turn = new Turn('b', card)
    expect(turn.playerGuess).to.deep.equal('b')
  })

  it('should store a card', function() {
    const card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    const turn = new Turn('b', card)
    expect(turn.card).to.deep.equal(card)
  })

  it('should return the player guess', function() {
    const card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    const turn = new Turn('b', card)

    const guess = turn.returnGuess()

    expect(guess).to.equal('b')
  })

  it('should return the card object', function() {
    const card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    const turn = new Turn('b', card)

    const turnCard = turn.returnCard()

    expect(turnCard).to.equal(card)
  })

  it('should evaluate player guess', function() {
    const card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    const turn1 = new Turn('b', card)
    const turn2 = new Turn('a', card)

    const guess1 = turn1.evaluateGuess(turn1, card)
    const guess2 = turn2.evaluateGuess(turn2, card)

    expect(guess1).to.equal(true)
    expect(guess2).to.equal(false)
  })

  it('should provide feedback to player', function() {
    const card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    const turn = new Turn('b', card)

    const feedback = turn.giveFeedback()

    expect(feedback).to.equal(`That's correct!`)
  })

})
