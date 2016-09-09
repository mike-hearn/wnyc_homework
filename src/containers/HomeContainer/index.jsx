import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';

import styles from './styles';

import LogoAndNavigation from '../../components/LogoAndNavigation';
import MainContainer from '../../containers/MainContainer';

@observer
class HomeContainer extends React.Component {
  render() {
    return (
      <div styleName='siteContainer'>
        <LogoAndNavigation />
        <MainContainer store={this.props.store}/>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  store: React.PropTypes.any,
};

export default CSSModules(HomeContainer, styles);
