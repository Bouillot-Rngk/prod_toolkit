// TeamStat Div`s
const teamStats = document.querySelector('#teamStats')
const kdaDiv = teamStats.querySelector('#kda')
const goldDiv = teamStats.querySelector('#gold')
const towerDiv = teamStats.querySelector('#tower')
const inhibitorsDiv = teamStats.querySelector('#inhibitors')
const drakesDiv = teamStats.querySelector('#drakes')
const eldersDiv = teamStats.querySelector('#elders')
const baronsDiv = teamStats.querySelector('#barons')
const hordeDiv = teamStats.querySelector('#horde')
const bansDiv = teamStats.querySelector('#bans')

const timePlayed = document.querySelector("#timePlayed")

function displayTeamStats(teams) {
  // KDA
  const blueTeamKDA = `${teams[100].stats.kills} / ${teams[100].stats.deaths} / ${teams[100].stats.assists}`
  kdaDiv.querySelector('.stat.blue').innerHTML = blueTeamKDA

  const redTeamKDA = `${teams[200].stats.kills} / ${teams[200].stats.deaths} / ${teams[200].stats.assists}`
  kdaDiv.querySelector('.stat.red').innerHTML = redTeamKDA

  // Gold
  const blueTeamGold = calcK(teams[100].stats.gold)
  goldDiv.querySelector('.stat.blue').innerHTML = blueTeamGold

  const redTeamGold = calcK(teams[200].stats.gold)
  goldDiv.querySelector('.stat.red').innerHTML = redTeamGold

  // Tower
  towerDiv.querySelector('.stat.blue').innerHTML = teams[100].stats.towers
  towerDiv.querySelector('.stat.red').innerHTML = teams[200].stats.towers

  // Inhibitors
  inhibitorsDiv.querySelector('.stat.blue').innerHTML =
    teams[100].stats.inhibitors
  inhibitorsDiv.querySelector('.stat.red').innerHTML =
    teams[200].stats.inhibitors

  // Drakes
  displayDrakes(teams)

  // Elders
  eldersDiv.querySelector('.stat.blue').innerHTML = teams[100].stats.elders
  eldersDiv.querySelector('.stat.red').innerHTML = teams[200].stats.elders

  // Barons
  baronsDiv.querySelector('.stat.blue').innerHTML = teams[100].stats.barons
  baronsDiv.querySelector('.stat.red').innerHTML = teams[200].stats.barons

  // Void Grubs
  hordeDiv.querySelector('.stat.blue').innerHTML = teams[100].stats.horde
  hordeDiv.querySelector('.stat.red').innerHTML = teams[200].stats.horde
  console.log(teams[100].stats)

  // Bans
  displayBans(teams)
}

function displayTimer(frames){
  var millis = Object.keys(frames)[Object.keys(frames).length - 1] 
  var minutes = Math.floor(millis / 60000)
  var seconds = ((millis % 60000) / 1000).toFixed(0)
  timePlayed.innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

function displayDrakes(teams) {
  const blueDrakes = teams[100].dragons
  const redDrakes = teams[200].dragons

  drakesDiv.querySelector('.stat.blue').innerHTML = ''
  for (let i = 0; i < blueDrakes.length; i++) {
    const drake = blueDrakes[blueDrakes.length - 1 - i]
      .split('_')[0]
      .toLowerCase()
    const drakeImg = document.createElement('img')
    drakeImg.classList.add('dragon')
    drakeImg.src = `${staticURL}/img/drakes/${drake}.png`

    drakesDiv.querySelector('.stat.blue').appendChild(drakeImg)
  }

  drakesDiv.querySelector('.stat.red').innerHTML = ''
  for (let i = 0; i < redDrakes.length; i++) {
    const drake = redDrakes[i].split('_')[0].toLowerCase()
    const drakeImg = document.createElement('img')
    drakeImg.classList.add('dragon')
    drakeImg.src = `${staticURL}/img/drakes/${drake}.png`

    drakesDiv.querySelector('.stat.red').appendChild(drakeImg)
  }
}

function displayBans(teams) {
  const blueBans = teams[100].bans
  const redBans = teams[200].bans

  bansDiv.querySelector('.stat.blue').innerHTML = ''
  for (let i = 0; i < blueBans.length; i++) {
    const ban = blueBans[i]
    const banImg = document.createElement('img')
    banImg.classList.add('ban')
    banImg.src = champUrl(ban)

    bansDiv.querySelector('.stat.blue').appendChild(banImg)
  }

  bansDiv.querySelector('.stat.red').innerHTML = ''
  for (let i = 0; i < redBans.length; i++) {
    const ban = redBans[i]
    const banImg = document.createElement('img')
    banImg.classList.add('ban')
    banImg.src = champUrl(ban)

    bansDiv.querySelector('.stat.red').appendChild(banImg)
  }
}
