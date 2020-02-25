import React, { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import data from './data/data';

function App() {
  const [links] = useState(data);

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
