import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import styles from './styles';

import liveIconRed from '../../assets/images/liveicon-red.svg';

const numberWithCommas = (x) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

@observer
class ContentCard extends React.Component {
  handleFollow() {
    this.props.story.followed = !this.props.story.followed;
    if (this.props.story.followed) {
      this.props.story.currentFollowers++;
    } else {
      this.props.story.currentFollowers--
    }
  }

  render() {

    const {
      image,
      title,
      brand,
      live,
      currentListeners,
      currentFollowers,
      timeSchedule,
      followable,
      followed,
      additionalCallout,
    } = this.props.story;

    const showLiveListeners = (
      <p>{numberWithCommas(currentListeners)} live listeners</p>
    );

    const showScheduledTime = (
      <p>
        {timeSchedule}
        <a href='#'>Set a reminder</a>
      </p>
    );

    const showFollow = (
      <p onClick={this.handleFollow.bind(this)}>
        <span styleName='followText'>{numberWithCommas(currentFollowers)} Following</span>
        <a
          href="javascript:void(0)"
          styleName={followed ? 'unfollowLink followLink' : 'unfollowLink followLink hidden'}>
          Unfollow
        </a>
        <a
          href='javascript:void(0)'
          styleName={followed ? 'followLink hidden' : 'followLink'}>
          Follow
        </a>
      </p>
    );

    return (
      <div styleName='contentCardContainer'>
        <div styleName='innerContentCardContainer'>
          <img src={image} />
          <div styleName='brandAndTitleContainer'>
            <p styleName='brand'>
              { live ? <img src={liveIconRed} styleName='liveIconRed' /> : null }
              {brand}
            </p>
            <p styleName='title'>{title}</p>
          </div>
        </div>
        <div styleName='cardFooter'>
          {currentListeners ? showLiveListeners : null}
          {timeSchedule ? showScheduledTime : null}
          {followable ? showFollow : null }
          {additionalCallout ? <p><a href='#'>{additionalCallout}</a></p> : null }
        </div>
      </div>
    );
  }
}

export default CSSModules(ContentCard, styles, {allowMultiple: true});
