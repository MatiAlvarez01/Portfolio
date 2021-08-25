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
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
    @media screen and (min-width: 1024px) {
        font-size: 21px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 23px;
    }
    @media screen and (min-width: 1920px) {
        font-size: 25px;
    }
    @media screen and (min-width: 2560px) {
        font-size: 30px;
    }
`

function NavBarEn() {
    return (
        <ContainDiv>
            <Actions href="/">Home</Actions>
            <Actions href="#AboutMe">About Me</Actions>
            <Actions href="#Proyects">Proyects</Actions>
            <Actions href="#Contact">Contact</Actions>
        </ContainDiv>
    )
}

export default NavBarEn;