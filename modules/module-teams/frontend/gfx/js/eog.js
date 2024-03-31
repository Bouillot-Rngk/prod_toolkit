const namespace = 'module-teams'

const teamsContainer = document.querySelectorAll('.team')
const blueScore = document.querySelector('#blue-score')
const blueTag = document.querySelector('#blue-tag')
const redTag = document.querySelector('#red-tag')
const blueName = document.querySelector('#blue-name')
const redScore = document.querySelector('#red-score')
const redName = document.querySelector('#red-name')
const pointContainer = document.querySelector('#point-container')
const blueLogo = document.querySelector('#blue-logo')
const redLogo = document.querySelector('#red-logo')

const tick = async () => {
  const data = await window.LPTE.request({
    meta: {
      namespace,
      type: 'request-current',
      version: 1
    }
  })

  if (data.state === 'READY') {
    displayTeams(data.teams, data.bestOf)
  } else {
    teamsContainer.forEach((t) => {
      t.style.display = 'none'
    })
  }
}

const update = (data) => {
  if (data.state === 'READY') {
    displayTeams(data.teams, data.bestOf)
  } else {
    teamsContainer.forEach((t) => {
      t.style.display = 'none'
    })
  }
}

window.LPTE.onready(() => {
  tick()
  window.LPTE.on(namespace, 'update', update)
})

function displayTeams(teams, bestOf) {
  teamsContainer.forEach((t) => {
    t.style.display = 'flex'
  })

  blueTag.innerHTML = teams.blueTeam.tag
  blueName.innerHTML = teams.blueTeam.name
  blueScore.innerHTML = teams.blueTeam.score
  blueLogo.src = "../img/" + teams.blueTeam.logo
  resizeText(blueName)

  redTag.innerHTML = teams.redTeam.tag
  redName.innerHTML = teams.redTeam.name
  redScore.innerHTML = teams.redTeam.score
  redLogo.src = "../img/" + teams.redTeam.logo
  resizeText(redName)

  redTag.classList.remove('outline')
  redName.classList.remove('outline')
  blueTag.classList.remove('outline')
  blueName.classList.remove('outline')

  if (bestOf > 1) {
    document.body.classList.add('has-scores')
    pointContainer.style.display = 'flex'
    displayPoints(bestOf, teams.blueTeam, teams.redTeam)
    if (teams.blueTeam.score >= Math.ceil(bestOf / 2)) {
      redTag.classList.add('outline')
      redName.classList.add('outline')
    } else if (teams.redTeam.score >= Math.ceil(bestOf / 2)) {
      blueTag.classList.add('outline')
      blueName.classList.add('outline')
    }
  } else {
    document.body.classList.remove('has-scores')
    pointContainer.style.display = 'none'
    if (teams.blueTeam.score > teams.redTeam.score) {
      redTag.classList.add('outline')
      redName.classList.add('outline')
    } else if (teams.redTeam.score > teams.blueTeam.score) {
      blueTag.classList.add('outline')
      blueName.classList.add('outline')
    }
  }
}

const isOverflown = ({ clientWidth, scrollWidth }) => scrollWidth > clientWidth

const resizeText = (parent) => {
  let i = 20 // let's start with 12px
  let overflow = false
  const maxSize = 30 // very huge text size

  while (!overflow && i < maxSize) {
    parent.style.fontSize = `${i}px`
    overflow = isOverflown(parent)
    if (!overflow) i++
  }

  // revert to last state where no overflow happened:
  parent.style.fontSize = `${i - 1}px`
}

function displayPoints(bestOf, blueTeam, redTeam) {
  const pointsToWin = Math.ceil(bestOf / 2)
  for (let i = 0; i < 5; i++) {
    const point = i + 1

    const setTeamPoints = (teamName, teamData) => {
      const selector = document.getElementById(`point-${teamName}-${point}`)
      if (teamData.score >= point) {
        // Point scored, make visible
        selector.style.display = 'block'
        // selector.style.visibility = 'unset'
        selector.classList.remove('empty')
      } else {
        // is this point possible to make?
        if (point > pointsToWin) {
          // no, completely not display
          selector.style.display = 'none'
          // selector.style.visibility = 'unset'
          selector.classList.remove('empty')
        } else {
          // yes, only soft hide
          // selector.style.visibility = 'hidden'
          selector.style.display = 'block'
          selector.classList.add('empty')
        }
      }
    }

    setTeamPoints('blue', blueTeam)
    setTeamPoints('red', redTeam)
  }
}
