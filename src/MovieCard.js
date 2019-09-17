import React, { Component } from 'react';
import UserList from './UserList';

class MovieCard extends Component {
  render() {
    const {users, usersWhoLikedMovie, movieInfo} = this.props
    console.log('MovieCard this.props', this.props);
    console.log('usersWhoLikedMovie', usersWhoLikedMovie);
    console.log('movieInfo', movieInfo);
    return (
      <li key={movieInfo.id}>
		<h2>{movieInfo.name}</h2>
		<p>Liked By:</p>

		<UserList
		  users={users}
		  usersWhoLikedMovie={usersWhoLikedMovie}
		/> 

      </li> 
       )
  }
}

export default MovieCard;