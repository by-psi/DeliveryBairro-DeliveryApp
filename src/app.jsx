import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from './app/context/auth.jsx';

/* Páginas */

import Site from "./site/index.jsx";
import signIn from "./login/signIn.jsx";
import signUp from "./login/signUp.jsx";
import signUpReset from "./login/reset.jsx"
import Pedidos from './app/menu/pedidos';
import Produtos from './app/menu/produtos';
import Delivery from './app/menu/delivery';
import Config from './app/menu/config';

function App() {
  const {logged} = useContext(AuthContext); // acrescentar nivel de acesso no contexto

  function SecureRoute({...params}) {
    if (!logged) {
      return <Redirect to="/#" />
    } else {
      return <Route {...params} />
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Site} />
        <Route exact path='/signin' component={signIn} />
        <Route exact path='/signup' component={signUp} />
        <Route exact path='/reset' component={signUpReset} />
        {/* ---------------------------------------------------------------------------- */}
        <SecureRoute exact path='/pedidos' component={Pedidos} />
        <SecureRoute exact path='/produtos' component={Produtos} />
        <SecureRoute exact path='/delivery' component={Delivery} />
        <SecureRoute exact path='/config' component={Config} />
        {/* ---------------------------------------------------------------------------- */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
