import React from "react"
import styled from "styled-components";

const ContainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (min-width: 2560px) {
        font-size: 1.5rem;
    }
`
const Actions = styled.a`
    color: black;
    margin: 1%;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`

function NavBar() {
    return (
        <ContainDiv>
            <Actions href="#Inicio">Inicio</Actions>
            <Actions href="#SobreMi">Sobre mi</Actions>
            <Actions href="#Proyectos">Proyectos</Actions>
            <Actions href="#Contacto">Contacto</Actions>
        </ContainDiv>
    )
}

export default NavBar;