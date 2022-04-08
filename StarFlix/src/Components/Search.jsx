import React from "react"

//

import { SearchContainer, 
    SearchInput, 
    SearchIcon } from "../Styles/Search"

//

import { IconSearch } from "../Assets"

//

export default class Search extends React.Component {
    render() {
        return (
            <SearchContainer>
                <SearchInput type="text">

                </SearchInput>

                <SearchIcon src={IconSearch}/>
            </SearchContainer>
        )
    }
}
