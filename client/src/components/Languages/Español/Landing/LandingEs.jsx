import React from "react";
import styled from "styled-components";
import Inicio from "../Inicio/Inicio";
import SobreMi from "../SobreMi/SobreMi";
import Proyectos from "../Proyectos/Proyectos";
import Formacion from "../Formacion/Formacion";

const ContainDiv = styled.div`
`

function Landing() {
    return (
        <ContainDiv>
            <Inicio />
            <SobreMi />
            <Proyectos />
            <Formacion />
        </ContainDiv>
    )
}

export default Landing;