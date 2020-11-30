const chai = require('chai')
const expect = chai.expect

const Card = require('../src/Card');
const Turn = require('../src/Turn')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of Turn', function() {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store a guess', function() {
    const card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    const turn = new Turn('b', card)
    expect(turn.guess).to.deep.equal('b')
  })

  it.skip('should store a card', function() {
    const card = new Card(1, 'What?', ['a', 'b', 'c'], 'b')
    const turn = new Turn('b', card)
    expect(turn.card).to.deep.equal(card)
  })

})
