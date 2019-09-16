import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
     const {usersByMovie, movies, users} = this.props;
     console.log('this.props', this.props); 
     console.log('usersByMovie', usersByMovie);
     console.log('Movies', movies);
     console.log('users', users);
    
    return (
  		<ul></ul>
  	)
  }
}

export default Dashboard;