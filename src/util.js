const inquirer = require('inquirer')
// const game = require('./index')

const genList = (round) => {
  let card = round.returnCurrentCard()

  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  })
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  }
}

const getRound = (round) => {
  return Promise.resolve(round)
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id)
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

const confirmGame = {
  type: 'rawlist',
  message: 'What would you like to do?',
  name: 'answers',
  choices: [
    {
      key: 'id1',
      value: 'Try Again'
    },
    {
      key: 'id2',
      value: 'Exit Game'
    }
  ]
}

async function continueGame() {
  return await inquirer.prompt(confirmGame)
}

async function main(round, game) {

  const currentRound = await getRound(round)
  const getAnswer = await inquirer.prompt(genList(currentRound))
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round))

    if( !round.returnCurrentCard() ) {
      round.endRound()

      if ( round.incorrectGuesses.length === 0 ) {
        process.exit()
      }

      continueGame().then( result => {

        if (result.answers === 'Try Again') {
          game.start(round.incorrectGuesses)
        } else {
          process.exit()
        }
      })
    } else {
      main(round)
    }
}

module.exports.main = main
