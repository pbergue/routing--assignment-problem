import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {

  render () {
    const search = queryString.parse(this.props.location.search);
    // const params = new URLSearchParams(search);
    // const title = params.get('title');
    // console.log(search, params, title);
      return (
          <div>
              <h1>{search.title}</h1>
              <p>You selected the Course with ID: {this.props.match.params.id}</p>
          </div>
      );
  }
}

export default Course;
