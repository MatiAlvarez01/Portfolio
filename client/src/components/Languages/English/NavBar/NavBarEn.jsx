import React from "react"
import styled from "styled-components";

const ContainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Actions = styled.a`
    color: black;
    margin: 1%;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`

function NavBarEn() {
    return (
        <ContainDiv>
            <Actions href="#Home">Home</Actions>
            <Actions href="#AboutMe">About Me</Actions>
            <Actions href="#Proyects">Proyects</Actions>
            <Actions href="#Education">Education</Actions>
        </ContainDiv>
    )
}

export default NavBarEn;