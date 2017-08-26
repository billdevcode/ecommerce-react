import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <NavBar>
        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={App}/>
        </Switch>
      </NavBar>
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root'));
registerServiceWorker();
