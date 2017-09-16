// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import registerServiceWorker from './registerServiceWorker';

//Components
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import About from './containers/About';
import NavBar from './components/NavBar';
import Contact from './containers/Contact';
import Footer from './components/Footer';
import ShowProduct from './containers/ShowProduct';
import './globalStyles.css';

import appReducer from './reducer.js'

const rootReducer = combineReducers({
  app: appReducer,
});

ReactDOM.render((
  <Provider store={createStore(rootReducer)}>
    <BrowserRouter>
      <BaseLayout>
        <NavBar>
          <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route exact path="/products/:type/:id" component={ShowProduct}/>
            <Route path="/" component={App}/>
          </Switch>
        </NavBar>
        <Footer />
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  ),
  document.getElementById('root'));
registerServiceWorker();
