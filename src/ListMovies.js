import React, { Component } from 'react';

class ListMovies extends Component {
  render() {
    console.log('Movies', this.props.movies);
    let items = Object.keys(this.props.movies);
    console.log('Keys', items);
    //// let value = this.props.movies[items[0]];
    //console.log('The Value', value['name']);
    //console.log('vlaue', items[0]);
    console.log('------------');
    console.log('profiles', this.props.profiles[0].favoriteMovieID == this.props.movies[1].id);

    /* {Object.keys(this.props.movies).map((item) => (
       <h2>{this.props.movies[item].name}</h2>
       ))} 
     */
     /*
     Object.keys(this.props.movies).map((item) => (
       console.log('****', this.props.movies[item].name)
       ))
      */
     
    /*
    {Object.keys(this.props.movies).map((item) => {
       		let that = this;
       		//console.log(that.props.movies[item].name)
       		return this.props.profiles.map((profile) => {
              if (return
              return <h2>{that.props.movies[item].name}</h2>
              //if (this.props.movies[item].id === 1) {
                  //return <h2>{this.props.movies[item].name}</h2>
              //}
            })
       		})}
    */
    
     return ( 
       <div>
       		{Object.keys(this.props.movies).filter((item) => {
                  
       			  //this.props.profiles.map((profile) => {
                      //if (this.props.movies[item].id == profile.favoriteMovieID) {
                      if (this.props.movies[item].id == this.profiles[0].favoriteMovieID) {               
                          console.log(this.props.movies[item].name);
                          return true;
                      }
                  //})
     		  })
  			.map((movie) => (
       			<h2>{this.props.movies[movie].name}</h2>
     		  ))
  			}
       </div>
     )
  }
}

export default ListMovies;