import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';

import styles from './styles';

import ContentShelf from '../ContentShelf';
import ContentCard from '../../components/ContentCard';
import SearchBox from '../../components/SearchBox';
import DonateCallout from '../../components/DonateCallout';
import WeatherTransit from '../../components/WeatherTransit';

import liveIconBlue from '../../assets/images/liveicon.svg';

@observer
class MainContainer extends React.Component {
  render() {
    const { store, ...props } = this.props;
    return (
      <div styleName='mainContainer'>
        <div styleName='searchAndDonationContainer'>
          <SearchBox/>
          <DonateCallout style='desktop'/>
        </div>
        <hr styleName='sectionSeparator'/>
        <div styleName='contentContainer'>
          <h1>Good morning, Maria!</h1>
          <WeatherTransit store={store}/>
          <ContentShelf title="Don&rsquo;t miss">
            {store.content.sections.dontMiss.map(
              (story, index) => <ContentCard story={story} key={index} />
            )}
          </ContentShelf>
          <ContentShelf
            title="Recommended stations"
            subtitle="Because of your interest in news and comedy."
          >
            {store.content.sections.recommendedStations.map(
              (story, index) => <ContentCard story={story} key={index} />
            )}
            <div styleName='customTile'>
              <img src='//i.imgur.com/9fXRyuq.png' />
              <div styleName='customTileBottom'>
                <img src={liveIconBlue} />
                <a href='javascript:void(0);'>Browse More Radios</a>
              </div>
            </div>
          </ContentShelf>
        </div>
      </div>
    );
  }
}

export default CSSModules(MainContainer, styles);
