import ReactDOM from 'react-dom';
import React from 'react';

import HomeContainer from './containers/HomeContainer';
import { UIStore } from './stores/UIStore';

import styles from './shared/styles';

var store = new UIStore();

ReactDOM.render(
  <HomeContainer store={store} />,
	document.getElementById('main')
);

