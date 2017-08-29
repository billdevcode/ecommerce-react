import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import ShowProduct from './components/ShowProduct';
import './globalStyles.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <NavBar>
        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          <Route exact path="/dresses/:id" component={ShowProduct}/>
          <Route path="/" component={App}/>
        </Switch>
      </NavBar>
      <Footer />
    </BaseLayout>
  </BrowserRouter>
  ,
  document.getElementById('root'));
registerServiceWorker();
