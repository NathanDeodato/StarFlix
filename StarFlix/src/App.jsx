import React from "react"

//

import { 
  BrowserRouter as Router,  
  Routes,
  Route,
  Link
  } from "react-router-dom"

//

import "./App.css"

//

import Home from "./Pages/Home"
import Movies from "./Pages/Movies"
import Series from "./Pages/Series"

//

import { App } from "./Styles/App"

import { Star } from "./Styles/App"

import { 
  MiniHeader, 
  TitleBox, 
  TitleHeader, 
  NavHeader, 
  Ul, 
  Li } from "./Styles/Header"

//

export default class StarFlix extends React.Component {
  state = {
    TitleHeader: "StarFlix",

    TitleMovie: "",
    DescriptionMovie: "",
    ImageMovie: "",
    BannerMovie: ""
  }
  
  render() {
    return (
      <App>
        <Router>
          <MiniHeader>
            <TitleBox>
              <Star />
              
              <TitleHeader>
                {this.state.TitleHeader}
              </TitleHeader>
            </TitleBox>
            
            <NavHeader>

              <Ul>
                <Li>
                  <Link to="/Home">
                    Home
                  </Link>
                </Li>
          
                <Li>
                  <Link to="/Movies">
                    Movies
                  </Link>
                </Li>
                  
                <Li>
                  <Link to="/Series">
                    Series
                  </Link>
                </Li>
              </Ul>
            </NavHeader>
          </MiniHeader>

          <Routes>
                <Route path="/Home" element={<Home/>}/>
  
                <Route path="/Movies" element={<Movies/>}/>
  
                <Route path="/Series" element={<Series/>}/>
            </Routes>
        </Router>
      </App>
    )
  }
}
