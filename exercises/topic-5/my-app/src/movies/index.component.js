// index.component.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Index extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);

        this.state = {
            movies: this.props.movies
        }
    }
    delete(i) {
        console.log(i);
                
    }
    render() {
         const listMovies = this.state.movies.map( (movie,i) =>
            <tr key={i}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.duration}</td>
                <td><Link to={"/edit/"+this.props.key} className="btn btn-primary">Edit</Link></td>
                <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td>
            </tr>            
         );
         for (let index = 0; index < listMovies.length; index++) {
            console.log(listMovies[index].key);             
         }
        return (
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
        )
    }
}