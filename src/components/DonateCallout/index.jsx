import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';

import styles from './styles';

@observer
class DonateCallout extends React.Component {
  render() {
    return (
      <div styleName={this.props.style}>
        <span styleName='callout'>WNYC is public radio, supported by listeners like you.</span>
        <a href="javascript:void(0);" styleName='donateButton'>
          <span>Donate</span></a>
      </div>
    );
  }
}

DonateCallout.propTypes = {
  style: React.PropTypes.string,
};

export default CSSModules(DonateCallout, styles);
