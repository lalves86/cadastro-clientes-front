import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Clients from './pages/Clients';

/*
  Arquivo para o roteamento
*/

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Clients} />
      </Switch>
    </BrowserRouter>
  );
}
