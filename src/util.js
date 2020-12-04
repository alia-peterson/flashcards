const inquirer = require('inquirer')

const genList = ( round ) => {
  let card = round.returnCurrentCard()

  let choices = card.answers.map(( answer, index ) => {
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

const getRound = ( round ) => {
  return Promise.resolve( round )
}

const confirmUpdate = ( id, round ) => {
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
      value: 'Retry questions that were answered incorrectly'
    },
    {
      key: 'id2',
      value: 'Exit Game'
    }
  ]
}

async function continueGame() {
  return await inquirer.prompt( confirmGame )
}

async function main( round, game ) {

  const currentRound = await getRound( round )
  const getAnswer = await inquirer.prompt( genList( currentRound ))
  const getConfirm = await inquirer.prompt( confirmUpdate( getAnswer.answers, round ))

    if( !round.returnCurrentCard() ) {
      round.endRound()

      if ( round.incorrectGuesses.length === 0 ) {
        calculateTimePassed( game )
        process.exit()
      }

      continueGame().then( result => {

        if (result.answers === 'Retry questions that were answered incorrectly') {
          game.start( round.incorrectGuesses )
        } else {
          calculateTimePassed( game )
          process.exit()
        }
      })

    } else {
      main( round, game )
    }
}

function calculateTimePassed( game ) {
  const endTime = Date.now()
  const millisecondsElapsed = endTime - game.startTime
  const totalSecondsElapsed = Math.floor(millisecondsElapsed/1000)
  const secondsElapsed = totalSecondsElapsed % 60
  const minutesElapsed = (totalSecondsElapsed - secondsElapsed) / 60
  console.log(`** Your game took ${minutesElapsed} minutes and ${secondsElapsed} seconds to complete! **`)
}

module.exports.main = main
