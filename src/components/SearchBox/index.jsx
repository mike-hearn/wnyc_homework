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

SearchBox.propTypes = {
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  optionalSymbol: React.PropTypes.symbol,
};

export default CSSModules(SearchBox, styles);
