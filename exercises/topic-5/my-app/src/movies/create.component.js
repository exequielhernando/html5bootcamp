// create.component.js

import React, { Component } from 'react';

export default class Create extends Component {
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
        this.setState({
            movie_title: '',
            movie_year: '',
            movie_duration: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Movie</h3>
                <form>
                    <div className="form-group">
                        <label>Add Movie Title:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Durationr: </label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}