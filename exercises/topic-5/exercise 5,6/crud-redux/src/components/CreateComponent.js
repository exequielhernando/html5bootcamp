import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateComponent extends Component {
  constructor(props){
    super(props);
    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
    this.onChangeMovieDuration = this.onChangeMovieDuration.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        movie_title: '',
        movie_year: '',
        movie_duration: ''
    }
  };
  onChangeMovieTitle(event){
    this.setState({
        movie_title: event.target.value
    });
  };
  onChangeMovieYear(event){
    this.setState({
        movie_year: event.target.value
    })
  };
  onChangeMovieDuration(event){
    this.setState({
        movie_duration: event.target.value
    });
  };
  handleSubmit(event){
    event.preventDefault();
    const movie_title = this.state.movie_title;
    const movie_year = this.state.movie_year;
    const movie_duration = this.state.movie_duration;
    let data = {
      id: new Date(),
      title: movie_title,
      year: movie_year,
      duration: movie_duration,
      editing: false
    };
    console.log(data);
    
    this.props.dispatch({
    type: 'ADD_MOVIE',
    data
    })
    this.setState({
      movie_title: '',
      movie_year: '',
      movie_duration: ''
    });
  }
render() {
return (
  <div className="row">
    <div className="col-6">
      <div style={{marginTop: 10}}>
        <h3>Add New Movie</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add Movie Title:  </label>
            <input type="text" 
              value={this.state.movie_title}
              onChange={this.onChangeMovieTitle} 
              className="form-control"
              required/>
          </div>
          <div className="form-group">
            <label>Add Movie Year: </label>
            <input type="date" 
              value={this.state.movie_year} 
              onChange={this.onChangeMovieYear} 
              className="form-control"
              required/>
          </div>
          <div className="form-group">
            <label>Add Movie Duration: </label>
            <input type="number" 
              value={this.state.movie_duration} 
              onChange={this.onChangeMovieDuration} 
              className="form-control"
              required/>
          </div>
          <div className="form-group">
            <input type="submit" value="Add Movie" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}
}
export default connect()(CreateComponent);
