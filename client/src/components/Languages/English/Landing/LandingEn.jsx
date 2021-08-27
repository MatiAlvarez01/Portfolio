import React from "react";
import styled from "styled-components";
import Inicio from "../../Español/Inicio/Inicio"
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Education from "../Contact/Contact";

const ContainDiv = styled.div`
`

function Landing() {
    return (
        <ContainDiv>
            <Inicio />
            <AboutMe />
            <Projects />
            <Education />
        </ContainDiv>
    )
}

export default Landing;