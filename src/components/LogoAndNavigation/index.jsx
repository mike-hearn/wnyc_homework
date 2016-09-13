import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';

import styles from './styles';

import DonateCallout from '../DonateCallout';

import wnycLogo from '../../assets/images/wnyc-logo.svg';

@observer
class LogoAndNavigation extends React.Component {
  render() {
    return (
      <div styleName='navigationContainer'>
        <div styleName='fixedSidebar'>
          <div styleName='logoAndDonationContainer'>
            <img styleName='wnycLogo' src={wnycLogo} />
            <DonateCallout style='mobile' />
          </div>
          <div styleName='links'>
            <div>
              <ul>
                <li><a href='#'>Listen Live</a></li>
                <li><a href='#'>Schedule</a></li>
                <li><a href='#'>Shows</a></li>
                <li><a href='#'>Topics</a></li>
                <li><a href='#'>Discover</a></li>
                <li styleName='signInLink'><a href='#'>Sign In</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(LogoAndNavigation, styles);
