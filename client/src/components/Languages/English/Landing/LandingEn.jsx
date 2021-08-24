import React from "react";
import styled from "styled-components";
import Inicio from "../../Español/Inicio/Inicio"
import AboutMe from "../AboutMe/AboutMe";
import Proyects from "../Proyects/Proyects";
import Education from "../Education/Education";

const ContainDiv = styled.div`
`

function Landing() {
    return (
        <ContainDiv>
            <Inicio />
            <AboutMe />
            <Proyects />
            <Education />
        </ContainDiv>
    )
}

export default Landing;