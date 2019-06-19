import React, { Component } from 'react';
import { connect } from 'react-redux';
class ShowMovie extends Component {
render() {
  
return (
  <table className="table table-striped table-dark">
    <tbody>
      <td>{this.props.post.title}</td>
      <td>{this.props.post.year}</td>
      <td>{this.props.post.duration}</td>
      <td><button className="btn-success" onClick={() => 
        this.props.dispatch({ type: 'EDIT_MOVIE', id: this.props.post.id })}
        >Edit</button></td>
      <td><button className="btn-danger" onClick={() => 
        this.props.dispatch({ type: 'DELETE_MOVIE', id: this.props.post.id })}
        >Delete</button></td>
    </tbody>
  </table> 
);
}
}
export default connect()(ShowMovie);