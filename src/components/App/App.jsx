import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AppProvider from '../../providers/AppProvider';
import SearchPage from '../../containers/SearchPage';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route exact path='/' component={SearchPage}/>
        </Switch>
      </AppProvider>
    </Router>
  )
}
  