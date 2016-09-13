import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';

import styles from './styles';

import loading from '../../assets/images/ellipsis.gif';
import sunnyIcon from '../../assets/images/sun.svg';
import partlySunnyIcon from '../../assets/images/cloud.svg';
import partlyCloudyIcon from '../../assets/images/cloudy.svg';

@observer
class WeatherTransit extends React.Component {
  componentDidMount() {
    this.props.store.fetchWeatherData();
  }
  render() {
    const weatherReport = () => {
      if (this.props.store.weatherFetchStatus === 'LOADED') {
        let temp = Math.round(this.props.store.weatherData.currently.temperature);
        let report = this.props.store.weatherData.currently.summary;
        let icon;
        switch(this.props.store.weatherData.currently.icon) {
            case 'partly-cloudy-day':
            case 'partly-cloudy-night':
              icon = partlySunnyIcon;
              break;
            case 'clear-day':
            case 'clear-night':
              icon = sunnyIcon;
              break;
            case 'cloudy':
              icon = partlyCloudyIcon;
              break;
            default:
              icon = partlySunnyIcon;

        }
        return (
          <p styleName='weatherText'>
            <img src={icon} styleName='weatherIcon' />
            It's {temp}°F degrees and {report.toLowerCase()}.
            The <span styleName='trainLabel'>Q</span> train is running with delays.
            <span styleName='customizeLink'><a href='javascript:void(0);'>Customize</a></span>
          </p>
        );
      } else {
        return <p><img src={loading} /></p>
      }
    };
    return (
      <div styleName='weatherTransitContainer'>
        {weatherReport()}
      </div>
    );
  }
}

export default CSSModules(WeatherTransit, styles);
