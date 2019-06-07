// index.component.js

import React, { Component } from 'react';

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: this.props.movies
        }
    }
    render() {
         const listMovies = this.state.movies.map( (movie,i) =>
            <tr key={i}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.duration}</td>
            </tr>
         );
        return (
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Year</th>
                        <th scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {listMovies}
                </tbody>
            </table>
        )
    }
}