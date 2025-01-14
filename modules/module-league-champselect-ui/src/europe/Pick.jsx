import React from 'react'
import cx from 'classnames'

import css from './style/index.less'

export default (props) => (

  <div className={cx(css.Pick, { [css.Active]: props.isActive })}>
    {props.spell1 &&
      props.spell2 &&
      props.showSummoners &&
      props.champion.name &&
      !props.isActive && (
        <div className={cx(css.SummonerSpells)}>
          <img src={props.spell1.icon} alt="" />
          <img src={props.spell2.icon} alt="" />
        </div>
      )}
    <div
      className={cx(css.PickImage, {
        [css.Active]: props.isActive
      })}
    >
      <img src={props.champion.splashCenteredImg} alt="" />
    </div>
    <div className={cx(css.ChampionName)}>
            <div className={cx(css.textInfos)}>{props.champion.name}</div>
        </div>

    <div className={cx(css.PlayerName)}>
      {props.displayName && <span className={cx(css.textInfos)} >{props.displayName}</span>}
      {!props.displayName && <span className={cx(css.textInfos)} >Cool Bot</span>}
    </div>
  </div>
)
