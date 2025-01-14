import React from 'react'
import cx from 'classnames'
import Pick from './Pick'

import css from './style/index.less'
import Ban from './Ban'


export default class Overlay extends React.Component {
  state = {
    currentAnimationState: css.TheAbsoluteVoid,
    openingAnimationPlayed: false
  }

  playOpeningAnimation() {
    this.setState({ openingAnimationPlayed: true })
    setTimeout(() => {
      this.setState({ currentAnimationState: css.AnimationHidden })

      setTimeout(() => {
        this.setState({
          currentAnimationState:
            css.AnimationTimer + ' ' + css.AnimationBansPick
        })

        setTimeout(() => {
          this.setState({
            currentAnimationState:
              css.AnimationBansPick + ' ' + css.AnimationBansPickOnly
          })

          setTimeout(() => {
            this.setState({ currentAnimationState: css.AnimationPigs })
          }, 1000)
        }, 1450)
      }, 700)
    }, 500)
  }

  render() {
    const { state, config } = this.props

    if (state.isActive && !this.state.openingAnimationPlayed) {
      this.playOpeningAnimation()
    }

    if (!state.isActive && this.state.openingAnimationPlayed) {
      this.setState({ openingAnimationPlayed: false })
      this.setState({ currentAnimationState: css.TheAbsoluteVoid })
    }

    const renderBans = (teamState) =>{
      const list =  teamState.bans.map((ban, idx) => <Ban key={`ban-${idx}`} {...ban} />);
      const list1 = list.slice(0,3);
      const list2 = list.slice(3,5);
      return (
      <div className={cx(css.BansBox)}>
          <p className={cx(css.BansContainer)}>{list1}</p>
          <p className={cx(css.BansContainer)}>{list2}</p>
      </div>
      )
  };

    const renderTeam = (teamName, teamConfig, teamState) => (
      <div className={cx(css.Team, teamName)}>
        <div className={cx(css.Picks)}>
          {teamState.picks.map((pick) => (
            <Pick
              config={this.props.config}
              {...pick}
              showSummoners={state.showSummoners}
            />
          ))}
        </div>
        <div className={css.BansWrapper}>
          <div
            className={cx(css.Bans, {
              [css.WithScore]: config.frontend.scoreEnabled
            })}
          >
            {teamName === css.TeamBlue && config.frontend.scoreEnabled && (
              <div className={css.TeamScore}>{teamConfig.score}</div>
            )}
            {teamName === css.TeamRed && renderBans(teamState)}
            {/* <div className={cx(css.TeamName, {[css.WithoutCoaches]: !config.frontend.coachesEnabled})}>
                            {teamConfig.name}
                            {config.frontend.coachesEnabled && <div className={css.CoachName}>
                                Coach: {teamConfig.coach}
                            </div>}
        </div> */}
            {teamName === css.TeamBlue && renderBans(teamState)}
            {teamName === css.TeamRed && config.frontend.scoreEnabled && (
              <div className={css.TeamScore}>{teamConfig.score}</div>
            )}
          </div>
        </div>
      </div>
    )

    return (
      <>
      <iframe 
      src="http://localhost:3003/pages/op-module-teams/gfx/draft-gfx.html" frameborder="0"
      width="1920"
      height="1080"
      className='absolute'
      id="draft"></iframe>

      <div
        className={cx(
          css.Overlay,
          css.Europe,
          this.state.currentAnimationState
        )} /* style={{"--color-red": config.frontend.redTeam.color, "--color-blue": config.frontend.blueTeam.color}} */
      >
        {Object.keys(state).length !== 0 && (
                <div className={cx(css.ChampSelect)}>

                <div className={cx(css.MiddleBox)}>
                    <div className={cx(css.Patch)}>
                        {state.state}
                    </div>
                    <div className={cx(css.Timer, {
                        [`${css.Red} ${css.Blue}`]: !state.blueTeam.isActive && !state.redTeam.isActive,
                        [css.Blue]: state.blueTeam.isActive,
                        [css.Red]: state.redTeam.isActive
                    })}>
                        <div className={cx(css.Background)} />
                        {state.timer < 100 && state.blueTeam.isActive && <div className={cx(css.TimerCharsBlue)}>
                            {state.timer.toString().split('').map((char, idx) => <div key={`div-${idx}`}
                                className={cx(css.TimerChar)}>{char}</div>)}
                        </div>}
                        {state.timer < 100 && state.redTeam.isActive && <div className={cx(css.TimerCharsRed)}>
                            {state.timer.toString().split('').map((char, idx) => <div key={`div-${idx}`}
                                className={cx(css.TimerChar)}>{char}</div>)}
                        </div>}
                        {state.timer >= 100 && state.blueTeam.isActive &&<div className={cx(css.TimerCharsBlue)}>
                            {state.timer}
                        </div>}
                        {state.timer >= 100 && state.redTeam.isActive &&  <div className={cx(css.TimerCharsRed)}>
                            {state.timer}
                        </div>}


                        {state.timer < 100 && !state.redTeam.isActive && !state.blueTeam.isActive && <div className={cx(css.TimerCharsBlue)}>
                            {state.timer.toString().split('').map((char, idx) => <div key={`div-${idx}`}
                                className={cx(css.TimerChar)}>{char}</div>)}
                        </div>}
                        {state.timer < 100 && !state.redTeam.isActive && !state.blueTeam.isActive &&<div className={cx(css.TimerCharsRed)}>
                            {state.timer.toString().split('').map((char, idx) => <div key={`div-${idx}`}
                                className={cx(css.TimerChar)}>{char}</div>)}
                        </div>}
                        {state.timer >= 100 && !state.redTeam.isActive && !state.blueTeam.isActive &&<div className={cx(css.TimerCharsBlue)}>
                            {state.timer}
                        </div>}
                        {state.timer >= 100 && !state.redTeam.isActive && !state.blueTeam.isActive &&<div className={cx(css.TimerCharsRed)}>
                            {state.timer}
                        </div>}
                    </div>
                </div>

            {renderTeam(css.TeamBlue, config.frontend.blueTeam, state.blueTeam)}
            {renderTeam(css.TeamRed, config.frontend.redTeam, state.redTeam)}
          </div>
        )}
      </div>
      </> )
  }
}
