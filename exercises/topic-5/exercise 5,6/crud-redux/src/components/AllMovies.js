import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditComponent from './EditComponent';
import ShowMovie from './ShowMovie';
class AllMovies extends Component {
render() {
return (
  <div>
    <table className="table table-striped table-dark">
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Year</th>
        <th scope="col">Duration</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </table> 
    {this.props.posts.map((post) => (
      <div key={post.id}>
        {post.editing ? <EditComponent post={post} key={post.id} /> : <ShowMovie post={post}
        key={post.id} />}
      </div>
    ))} 
  </div>
);
}
}

const mapStateToProps = (state) => {
return {
posts: state
}
}
export default connect(mapStateToProps)(AllMovies);