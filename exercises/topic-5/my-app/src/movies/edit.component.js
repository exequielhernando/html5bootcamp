// edit.component.js

import React, { Component } from 'react';
import Index from './index.component';

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMovieDuration = this.onChangeMovieDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        });
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
        this.props.movies.push(newMovie);
        this.setState({
            movie_title: '',
            movie_year: '',
            movie_duration: ''
        });
        const {i} = this.state;
        i.find(n => n.id === i.id);
        console.log(i.id);
        
    };
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <div style={{marginTop: 10}}>
                        <h3>Add New Movie</h3>
                        <form onEdit={this.onSubmit}>
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
                                <input type="onSubmit" value="Edit Movie" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-6">
                    <Index movies={this.props.movies}/>
                </div>    

            </div>
        )
    }
}