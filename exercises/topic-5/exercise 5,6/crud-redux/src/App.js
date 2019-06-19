import React, { Component } from 'react';
import CreateComponent from './components/CreateComponent';
import AllMovies from './components/AllMovies';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
render() {
return (
<div className="container">
  <div className="row">
    <div className="col mx-auto">
      <CreateComponent/>
      <AllMovies/>
    </div>
  </div>
</div>
);
}
}
export default App;