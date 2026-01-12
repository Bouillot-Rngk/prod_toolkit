const goldGraphCTX = document.getElementById('goldGraphCTX').getContext('2d')

const blue = 'rgba(42,145,240,1)'
const red = 'rgba(161,0,180,1)'
const white = 'rgba(250,250,250,1)'
const whiteTransparent = 'rgba(250,250,250,0.1)'
const black = 'rgba(10,10,10,1)'


function calcK(amount) {
  switch (true) {
    case amount > 999:
      return `${(amount / 1000).toFixed(1)} k`
    default:
      return amount
  }
}

async function displayGoldGraph(frames) {
//const frames = data.state.goldFrames
  const keys = Object.keys(frames)
  const values = Object.values(frames)
  //const values = [ 0, 0, 16, -88, 594, 204, -521, -36, -225, 1104, 362, 341, 1454, 2379, 2928, 2301, 2070, 1706, -2505, -3615, -5701, 2930, 3215, 3389, 3611, 6416, 8672, 9189, 12123, 12609]      
  //const keys = [ 0, 0, 16, -88, 594, 204, -521, -36, -225, 1104, 362, 341, 1454, 2379, 2928, 2301, 2070, 1706, -2505, -3615, -5701, 2930, 3215, 3389, 3611, 6416, 8672, 9189, 12123, 12609] 
  let min_value = Math.min(...values)*1.02 < -999 ? Math.min(...values)*1.02 : -1000
  let max_value = Math.max(...values)*1.02 > 999 ? Math.max(...values)*1.02 : 1000
  var chart = new Chart(goldGraphCTX, {
    type: 'NegativeTransparentLine',
    data: {
      labels: keys,
      datasets: [
        {
          yAxisID: 'y-axis-0',
          strokeColor: black,
          pointColor: black,
          pointStrokeColor: black,
          data: values,
          pointColor:white,
          borderWidth: 4,
          borderColor: white,
          pointRadius:0,
          lineTension: 0
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              min: min_value,
              max: max_value,
              position:'right',
              maxTicksLimit: 2,
              fontSize: 15,
              fontColor: white,
              callback: function (value, index, values) {
                return calcK(value.toFixed(0).replace(/-/g, ''))
              }
            },
            gridLines: {
              color: whiteTransparent
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              autoskip: true,
              maxTicksLimit: 8,
              autoSkipPadding: 50,
              fontSize: 10,
              fontColor: white,
              callback: function (value, index, values) {
                return millisToMinutesAndSeconds(value)
              }
            },
            gridLines: {
              color: whiteTransparent
            }
          }
        ]
      },
      legend: {
        display: false
      },
      responsive: true,
      aspectRatio: 2.5
    }
  })
}

function changeColors(e) {
  if (e.teams.blueTeam.color === '#000000') {
    document
      .querySelector(':root')
      .style.setProperty('--blue-team', blue)
  }
}

LPTE.onready(async () => {
  const teams = await window.LPTE.request({
    meta: {
      namespace: 'module-teams',
      type: 'request-current',
      version: 1
    }
  })

  if (teams !== undefined) {
    changeColors(teams)
  }

  window.LPTE.on('module-teams', 'update', changeColors)

  const emdOfGameData = await LPTE.request({
    meta: {
      namespace,
      type: 'request',
      version: 1
    }
  })
  displayGoldGraph(emdOfGameData)

  LPTE.on(namespace, 'update', displayGoldGraph)
})

// Helper to calc milliseconds to minutes and seconds
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000)
  var seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

// Add new type of chart to chart.js
Chart.defaults.NegativeTransparentLine = Chart.helpers.clone(
  Chart.defaults.line
)
Chart.controllers.NegativeTransparentLine = Chart.controllers.line.extend({
  update: function () {
    // get the min and max values
    var min = Math.min.apply(null, this.chart.data.datasets[0].data)
    var max = Math.max.apply(null, this.chart.data.datasets[0].data)
    var yScale = this.getScaleForId(this.getDataset().yAxisID)

    // figure out the pixels for these and the value 0
    var top = yScale.getPixelForValue(max)
    var zero = yScale.getPixelForValue(0)
    var bottom = yScale.getPixelForValue(min)

    // build a gradient that switches color at the 0 point
    var ctx = this.chart.chart.ctx

    var gradient = ctx.createLinearGradient(0, top, 0, bottom)
    var ratio = 0
    if(bottom === top){
      ratio = Math.min((zero-top), 1)
    }else {
     ratio = Math.min((zero - top) / (bottom - top), 1)
    }
    if (ratio < 0) {
      ratio = 0
      gradient.addColorStop(1, red)
    } else if (ratio == 1) {
      gradient.addColorStop(1, blue)
    } else {
      gradient.addColorStop(0, blue)
      gradient.addColorStop(ratio, blue)
      gradient.addColorStop(ratio, red)
      gradient.addColorStop(1, red)
    }
    this.chart.data.datasets[0].backgroundColor = gradient

    return Chart.controllers.line.prototype.update.apply(this, arguments)
  }
})
