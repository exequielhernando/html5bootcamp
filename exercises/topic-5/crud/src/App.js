import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <>
            <Header/>

            <Switch>
              <Route exact path="/" Component={Productos}></Route>
              <Route exact path="/productos/nuevo" Component={NuevoProducto}></Route>
              <Route exact path="/productos/editar/:id" Component={EditarProducto}></Route>
            </Switch>
          </>
        </Router>
      </Provider>
      
    );
  }
  
}

export default App;
