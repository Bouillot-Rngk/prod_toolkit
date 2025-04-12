const blueTeamPicks = document.querySelector('#blueTeamPicks')
const blueBan = document.querySelector('#blueBan')

const redTeamPicks = document.querySelector('#redTeamPicks')
const redBan = document.querySelector('#redBan')


const DEFAULT_BAN_ICON = './img/ban_placeholder.svg';
function displayBans(teamData, container, teamColor) {
  container.innerHTML = '';

  // Ensure exactly 5 items with fallback
  const bans = [...teamData.bans];
  while (bans.length < 5) {
    bans.push(null); // fill with nulls if needed
  }

  bans.forEach((ban, index) => {
    const img = document.createElement('img');
    img.src = ban?.champion?.squareImg || DEFAULT_BAN_ICON;
    container.appendChild(img);


    if (teamColor === 'blue') {
      if (index === 3) img.style.gridColumn = '2';
      if (index === 4) img.style.gridColumn = '3';
    }
  });
}
async function displayPUBOrder(data) {
  if (!data) {
    return
  }

  console.log(data)

  // Reset
  blueTeamPicks.innerHTML = ''
  redTeamPicks.innerHTML = ''
  blueBan.innerHTML = ''
  redBan.innerHTML = ''

  // Bans
  displayBans(data.blueTeam, blueBan, "blue");
  displayBans(data.redTeam, redBan, 'red');

  const pickSequence = [
    { team: 'blue', index: 0, slot: 1 },
    { team: 'red', index: 0, slot: 2 },
    { team: 'red', index: 1, slot: 3 },
    { team: 'blue', index: 1, slot: 4 },
    { team: 'blue', index: 2, slot: 5 },
    { team: 'red', index: 2, slot: 6 },
    { team: 'red', index: 3, slot: 7 },
    { team: 'blue', index: 3, slot: 8 },
    { team: 'blue', index: 4, slot: 9 },
    { team: 'red', index: 4, slot: 10 }
  ];

  pickSequence.forEach(pick => {
    const champ = data[`${pick.team}Team`].picks[pick.index];
    const img = document.createElement('img');
    img.src = champ.champion.squareImg;
    img.style.gridColumn = pick.slot;

    if (pick.team === 'blue') {
      blueTeamPicks.appendChild(img);
    } else {
      redTeamPicks.appendChild(img);
    }
  });
}