import styled from "styled-components"

export const WindowContainer = styled.section `

    border-bottom: 1px solid #52426d;
`

export const WindowBox = styled.section `
    width: 8vw;
    height: 8vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-left: 1vw;
`

export const WindowButton = styled.div `
    width: 1.3vw;
    height: 2.6vh;

    background-color: #5f4f79;

    border-radius: 50%;

    &:hover {
        cursor: pointer;
    }
`
