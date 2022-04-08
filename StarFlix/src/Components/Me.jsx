import React from "react"

//

import { 
    MeBox, 
    MeBoxIcon, 
    MeIcon, 
    MeTitleBox, 
    MeTitle } from "../Styles/Me"

import { Deodatont } from "../Assets"

//

export default class Me extends React.Component {
    render() {
        return (
            <MeBox>

                <MeBoxIcon>

                    <MeIcon src={Deodatont}/>

                </MeBoxIcon>

                <MeTitleBox>
                
                    <MeTitle>
                        Deodatont
                    </MeTitle>

                </MeTitleBox>

            </MeBox>
        )
    }
}

