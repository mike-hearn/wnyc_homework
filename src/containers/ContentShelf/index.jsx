import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';

import styles from './styles';

@observer
class ContentShelf extends React.Component {
  render() {
    return (
      <div styleName='contentShelfContainer'>
        <h2 styleName='shelfTitle'>{this.props.title}</h2>
        {this.props.subtitle ? 
          <p styleName='shelfSubtitle'>{this.props.subtitle}</p> : null
        }
        <div styleName='contentShelf'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ContentShelf.propTypes = {
  title: React.PropTypes.string,
};

export default CSSModules(ContentShelf, styles);
