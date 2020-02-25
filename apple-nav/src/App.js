import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  const category = [
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'TV',
    'Music',
    'Support'
  ];

  return (
    <Switch>
      <Route exact path='/'>
        home
      </Route>
      <Route exact path='/:category'>
        iphone
      </Route>
    </Switch>
  );
}

export default App;
