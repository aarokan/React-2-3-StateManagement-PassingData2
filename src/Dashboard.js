import React, { Component } from 'react';
import MovieCard from './MovieCard';

class Dashboard extends Component {
  render() {
    
    const {usersByMovie, movies, users} = this.props;
    console.log('this.props', this.props); 
    console.log('usersByMovie', usersByMovie);
    console.log('Movies', movies);
    console.log('users', users);
    
    const movieCards = Object.keys(movies).map(id => (
      	<MovieCard
      	  key={id}
		  users={users}
  		  usersWhoLikedMovie={usersByMovie[id]}
		  movieInfo={movies[id]}
		  />
      ))
    
    return (
  		<ul>{movieCards}</ul>
  	)
  }
}

export default Dashboard;