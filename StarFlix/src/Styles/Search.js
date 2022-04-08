import styled from "styled-components"

export const SearchContainer = styled.section `
    width: 20vw;
    height: 10vh;
    
    margin: 0 auto;
    margin-top: 5vh;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const SearchInput = styled.input `
    width: 80%;
    height: 45%;

    padding-left: 5%;

    color: #fff;

    background-color: #3d3150;
    border: none;
    border-radius: 10px;
    outline: none;
`

export const SearchIcon = styled.img `
    width: 15%;

    &:hover {
        cursor: pointer;
    }
`
