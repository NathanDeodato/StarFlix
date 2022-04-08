import styled from "styled-components"

//

export const MiniHeader = styled.header `
    width: 100vw;
    height: 12vh;
    
    margin: 0 auto;

    display: flex;
    justify-content: space-around;

    border-bottom: 1px solid #3d3150;
`

export const TitleBox = styled.section `
    width: 40%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleHeader = styled.h1 `
    color: #ff0000;
    font-size: 2.2em;
    
    &:hover {
        cursor: pointer;
    }
`

export const NavHeader = styled.nav `
    width: 60%;
    height: 100%;

    display: flex;
    align-items: center;
`

export const Ul = styled.ul `
    width: 80%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Li = styled.li `
    width: 5vw;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    list-style: none;

    &:hover {
        cursor: pointer;

        padding-bottom: 10px;
        border-bottom: 2px solid;
        border-radius: 0px 0px 2px 2px;
    }
`

export const Link = styled.a `
    text-decoration: none;
    list-style: none;
`
