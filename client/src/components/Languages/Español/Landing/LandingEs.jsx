import React from "react";
import styled from "styled-components";
import Inicio from "../Inicio/Inicio";
import SobreMi from "../SobreMi/SobreMi";
import Proyectos from "../Proyectos/Proyectos";
import Contacto from "../Contacto/Contacto";

const ContainDiv = styled.div`
`

function Landing() {
    return (
        <ContainDiv>
            <Inicio />
            <SobreMi />
            <Proyectos />
            <Contacto />
        </ContainDiv>
    )
}

export default Landing;