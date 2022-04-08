import styled from "styled-components"

export const MeBox = styled.section `
    width: 40vw;
    height: 35vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const MeBoxIcon = styled.section `
    height: 25vh;

    display: flex;
    align-items: center;
`

export const MeIcon = styled.img `
    width: 11vw;

    &:hover {
        cursor: pointer;

        width: 13vw;
    }
`

export const MeTitleBox = styled.section `
    height: 10vh;

    display: flex;
    align-items: center;
`

export const MeTitle = styled.h2 `

`
