import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom'
import store from './state/store';
import history from './history';

import Header from './components/Header/Header';
import EventGalleryContainer from './containers/EventGalleryContainer';
import LoadMoreButtonContainer from './containers/LoadMoreButtonContainer';
import Dashboard from './components/Dashboard';
import MoreAboutEventContainer from './containers/MoreAboutEventContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-container">
          <Header/>
          <HashRouter history={history}>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/events/:id' component={MoreAboutEventContainer}/>
            </Switch>
          </HashRouter>
        </div>

      </Provider>
    );
  }
}

export default App;
