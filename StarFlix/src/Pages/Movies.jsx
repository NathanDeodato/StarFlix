import React from "react"

//

import TMDB_API from "../Services/TMDB-api"

import Search from "../Components/Search"

//

import { 
  MoviesContainer, 
  MoviesBox, 
  MiniMoviesBoxOne, 
  MiniMoviesBoxTwo, 
  MoviesBanner, 
  MoviesTitle, 
  MoviesImage,
  Description,
  Classification,
  Rating } from "../Styles/Movies"

import WindowModel from "../Components/Global/WindowModel"

//

export default class Movies extends React.Component {
  state = {
    MoviesList: [],
  }

  render() {
    return (
        <MoviesContainer>

          <Search></Search>

          <MoviesBox>

            <WindowModel/>

            <MiniMoviesBoxOne>

            </MiniMoviesBoxOne>

            <MiniMoviesBoxTwo>

            </MiniMoviesBoxTwo>

            <MoviesBanner>

            </MoviesBanner>

            <MoviesTitle>
              {this.state.MoviesList.map((item) => 
                {console.log(item.title)}
              )}
            </MoviesTitle>

            <MoviesImage>

            </MoviesImage>

            <Description>

            </Description>

            <Classification>

            </Classification>

            <Rating>

            </Rating>

          </MoviesBox>
        
        </MoviesContainer>
    )
  }
}
