import styled from "styled-components"

export const MiniInfoBox = styled.section `
    width: 70vw;
    height: 50vh;
    
    display: flex;
    justify-content: space-around;
`

export const MiniInfoBoxOne = styled.section `
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const MiniInfoBoxTwo = styled.section `
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const MicroInfoBox = styled.section `
    height: 70%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const MiniIconBox = styled.section `
    height: 30%;

    display: flex;
    align-items: center;
`

export const MiniButtonBox = styled.section `
    height: 40%;

    display: flex;
    align-items: center;
`

export const IconTMDB = styled.img `
    width: 10vw;

    &:hover {
        cursor: pointer;
        
        width: 14vw;
    }
`

export const IconVNW = styled.img `
    width: 7vw;

    &:hover {
        cursor: pointer;

        width: 9vw;
    }
`

export const Text = styled.p `
    width: 100%;
    height: 60%;

    display: flex;
    align-items: center;

    font-size: 0.9em;
`

export const WebLink = styled.a `
    color: #fff;
    text-decoration: none;
`

export const WebButton = styled.button `
    width: 9vw;
    height: 5.5vh;

    color: #fff;
    font-size: 0.75em;
    font-weight: bold;

    background-color: #5f4f79;
    box-shadow: 2px 2px 4px #2d243b;
    border: none;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        
        width: 10.5vw;
        height: 6.2vh;

        box-shadow: 6px 6px 8px #2d243b;

        font-size: 0.85em;
    }
`
