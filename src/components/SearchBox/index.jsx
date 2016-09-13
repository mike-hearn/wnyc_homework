import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules';

import styles from './styles';

import magnifyingGlass from '../../assets/images/magnifying-glass.svg';

@observer
class SearchBox extends React.Component {
  render() {
    return (
      <div styleName='searchBoxContainer'>
        <img src={magnifyingGlass} />
        <input styleName='searchBoxField' type='text' placeholder='I heard something... Help me find it'/>
      </div>
    );
  }
}

export default CSSModules(SearchBox, styles);
