import {observable, computed, autorun, action, asMap} from 'mobx';
import fetch from 'isomorphic-fetch';
import $ from 'jQuery';

const initialContent = {
  sections: {
    dontMiss: [
      {
        title: 'A hard knock life',
        brand: 'Radiolab',
        image: '//i.imgur.com/vBYEuwO.png',
        live: false,
        currentListeners: null,
        currentFollowers: null,
        timeSchedule: null,
        followable: false,
        followed: false,
      },
      {
        title: 'The Brian Lehrer Show',
        brand: 'WNYC FM 93.9',
        image: '//i.imgur.com/NodpVPY.png',
        live: true,
        currentListeners: 9391,
        currentFollowers: null,
        timeSchedule: null,
        followable: false,
        followed: false,
      },
      {
        title: 'Finding creative breakthroughs',
        brand: 'The Leonard Lopate Show',
        image: '//i.imgur.com/0mhvWza.png',
        live: false,
        currentListeners: null,
        currentFollowers: null,
        timeSchedule: 'Today at 2PM',
        followable: false,
        followed: false,
      },
      {
        title: 'Everything you need to know about voting',
        brand: 'Election 2016 Radio',
        image: '//i.imgur.com/XkYTP2F.png',
        live: true,
        currentListeners: null,
        currentFollowers: 8341,
        timeSchedule: null,
        followable: true,
        followed: false,
      },
    ],
    recommendedStations: [
      {
        title: 'Local, national, and world news', // the oxford comma oooooo
        brand: 'News Junkie Radio',
        image: '//i.imgur.com/haaaiot.png',
        live: true,
        currentListeners: null,
        currentFollowers: 8341,
        timeSchedule: null,
        followable: true,
        followed: true,
      },
      {
        title: 'Interviews with funny people',
        brand: 'Laughs Radio',
        image: '//i.imgur.com/1obFjAm.png',
        live: true,
        currentListeners: null,
        currentFollowers: 8341,
        timeSchedule: null,
        followable: true,
        followed: false,
      },
      {
        title: 'The latest from your favorite WNYC shows',
        brand: 'Radio For You',
        image: '//i.imgur.com/WvJu3pM.png',
        live: true,
        currentListeners: null,
        currentFollowers: null,
        timeSchedule: null,
        followable: false,
        followed: false,
        additionalCallout: 'Edit My Favorites'
      },
    ]
  }
}

export class UIStore {
  @observable content = asMap({});
  @observable weatherFetchStatus = 'NOT_LOADED';
  @observable transitFetchStatus = 'NOT_LOADED';
  @observable weatherData = null;
  @observable transitData = null;

  constructor(content = initialContent) {
    this.content = content;
  }

  @action fetchWeatherData() {
    let weatherUrl = 'https://api.forecast.io/forecast/8d7fc214dd5a4553c3d1b22d8275315a/40.730610,-73.935242';
    let _that = this;
    this.weatherFetchStatus = 'LOADING';
    $.ajax
    $.ajax({
      url: weatherUrl,
      dataType: 'jsonp',
      success: function (data) {
        _that.weatherData = data;
        _that.weatherFetchStatus = 'LOADED';
      }
    });
  }

  @action fetchTransitData() {
  }
}
