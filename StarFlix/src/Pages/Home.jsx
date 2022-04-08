import React from "react"

//

import WindowModel from "../Components/Global/WindowModel"

import { 
    MiniHome, 
    WindowBox, 
    HomeBox } from "../Styles/Home.js"

//

import InfoApp from "../Components/InfoApp"

import Me from "../Components/Me"

//

export default class Home extends React.Component {
    state = {
        
    }
  
    render() {
    return (
        <MiniHome>

            <HomeBox>

                <WindowBox>

                    <WindowModel/>

                </WindowBox>

                <InfoApp/>

            </HomeBox>

            <HomeBox>

                <WindowBox>

                    <WindowModel/>

                </WindowBox>

                <Me/>

            </HomeBox>

        </MiniHome>
    )
  }
}
