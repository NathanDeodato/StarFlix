import React from "react"

//

import { 
  BrowserRouter as Router,  
  Routes,
  Route,
  Link
  } from "react-router-dom"

//

import Home from "../Pages/Home"
import Movies from "../Pages/Movies"
import Series from "../Pages/Series"

//

import { 
  MiniHeader, 
  TitleBox, 
  TitleHeader, 
  NavHeader, 
  Ul, 
  Li } from "../Styles/Header"

//

export default class Header extends React.Component {
  state = {
    Title: "StarFlix",
    Pages: ["Home", "Movies", "Series"]
  }
  
  render() {
    return (
      <Router>
      
        <MiniHeader>
          
          <TitleBox>
            <TitleHeader>
              {this.state.Title}
            </TitleHeader>
          </TitleBox>
          
            <NavHeader>

              <Ul>
          
                <Link to="/">
                  <Li>
                    Home
                  </Li>
                </Link>
          
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

            <Routes>

              <Route path="/" element={Home}>
                <Home/>
              </Route>

              <Route path="/Movies" element={Movies}>
                <Movies/>
              </Route>

              <Route path="/Series" element={Series}>
                <Series/>
              </Route>

            </Routes>

        </MiniHeader>
      
      </Router>
    )
  }
}
