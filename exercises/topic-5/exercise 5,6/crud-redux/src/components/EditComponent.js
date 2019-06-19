import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
  constructor(props){
    super(props);
    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
    this.onChangeMovieDuration = this.onChangeMovieDuration.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    
    this.state = {
      movie_title:this.props.post.title,
      movie_year:this.props.post.year,
      movie_duration: this.props.post.duration
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
  handleEdit(event){
  event.preventDefault();
  const newTitle = this.state.movie_title;
  const newDate = this.state.movie_year;
  const newDuration = this.state.movie_duration;

  const data = {
    newTitle,
    newDate,
    newDuration
  }
  this.props.dispatch({ 
    type: 'UPDATE', 
    id: this.props.post.id, 
    data:data 
  })
  this.setState({
    movie_title: '',
    movie_year: '',
    movie_duration: ''
});
}
render() {
return ( 
<div key={this.props.post.id} className="post">
  <form onSubmit={this.handleEdit}>
    <div className="form-group">
      <input required className="form-control" type="text" onChange={this.onChangeMovieTitle} defaultValue={this.props.post.title} /><br /><br />
      <input required className="form-control" type="date" onChange={this.onChangeMovieYear} defaultValue={this.props.post.year} /><br /><br />
      <input required className="form-control" type="number" onChange={this.onChangeMovieDuration} defaultValue={this.props.post.duration}/><br /><br />
    </div>
    <button type="submit" class="btn btn-primary">Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);