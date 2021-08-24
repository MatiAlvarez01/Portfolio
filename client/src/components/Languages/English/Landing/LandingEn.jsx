import React from "react";
import styled from "styled-components";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Proyects from "../Proyects/Proyects";
import Education from "../Education/Education";

const ContainDiv = styled.div`
`

function Landing() {
    return (
        <ContainDiv>
            <Home />
            <AboutMe />
            <Proyects />
            <Education />
        </ContainDiv>
    )
}

export default Landing;