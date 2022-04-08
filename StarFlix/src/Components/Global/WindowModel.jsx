import React from "react"

//

import { WindowContainer, WindowBox, WindowButton } from "../../Styles/WindowModel"

//

export default class WindowModel extends React.Component {
    render() {
        return (
            <WindowContainer>

                <WindowBox>

                    <WindowButton/>
                    
                    <WindowButton/>
                    
                    <WindowButton/>

                </WindowBox>

            </WindowContainer>
        )
    }
}
