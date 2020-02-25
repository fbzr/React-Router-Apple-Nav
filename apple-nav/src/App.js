import React, { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import data from './data/data';
import Navbar from './components/Navbar';
import Subnav from './components/Subnav';

function App() {
  const [links] = useState(data.links);

  return (
    <Fragment>
      <Navbar links={links} />

      <Route path='/:category'>
        <Subnav links={links} />
      </Route>
    </Fragment>
  );
}

export default App;
