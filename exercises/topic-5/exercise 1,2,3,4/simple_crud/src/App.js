import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props){
    super(props);
    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
    this.onChangeMovieDuration = this.onChangeMovieDuration.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.state = {
      movie_title : '',
      movie_year : '',
      movie_duration: '',
      movies: []
    }
  }
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
  onSubmit(event){
    event.preventDefault();
    console.log(`The value are ${this.state.movie_title}, ${this.state.movie_year}, and ${this.state.movie_duration}`);
    let newMovie = {
        title: this.state.movie_title, 
        year: this.state.movie_year,
        duration: this.state.movie_duration   
    };
    this.state.movies.push(newMovie);
    this.setState({
        movie_title: '',
        movie_year: '',
        movie_duration: ''
    });
  }
  onEdit(i){
    let movie = this.state.movies[i];
    console.log(movie);
    
    let title = this.state.movie_title;
    let year = this.state.movie_year;
    let duration = this.state.movie_duration;
    
   

    if ((title && year && duration) !== '') {
      movie.title = title;
      movie.year = year;
      movie.duration = duration;
    } else {
      alert("You must complete the fields before editing")
    }
    this.setState({
      movie_title: '',
      movie_year: '',
      movie_duration: ''
    });
  }
  onDelete(i){
    let movie =  this.state.movies;
    movie.splice(i, 1);
    this.setState({
      movie_title: '',
      movie_year: '',
      movie_duration: ''
    });
  }
  render() {
    const listMovies = this.state.movies.map( (movie,i) =>
            <tr key={i}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.duration}</td>
                <td><button onClick= {() => this.onEdit(i)} className="btn btn-success">Edit</button></td>
                <td><button onClick= {() => this.onDelete(i)} className="btn btn-danger">Delete</button></td>
            </tr>            
    );    
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto">
             <div style={{marginTop: 10}}>
                <h3>Add New Movie</h3>
                <form onSubmit={this.onSubmit}>
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
                    <label>Add Movie Durationr: </label>
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
        <div className="row">  
          <div className="col-8 mx-auto">
            <table className="table">
              <thead className="thead-light">
                  <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Year</th>
                      <th scope="col">Duration</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  </tr>
              </thead>
              <tbody>
                  {listMovies}    
              </tbody>
            </table>
          </div>
        </div> 
      </div>     
    );
  }
}

export default App;