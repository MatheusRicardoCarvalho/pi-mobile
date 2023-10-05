import React, { useContext, useEffect, useState } from "react";
import { Body, ButtonTouch, StyledText, Title } from "../../styleds/home";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
    const authContext = useContext(AuthContext);

    const handlesignOut = () => {
        authContext?.signOut();

    }
    return (
        <Body>
            <Title>estamos logados</Title>
            <ButtonTouch onPress={handlesignOut}><StyledText>Deslogar</StyledText></ButtonTouch>
        </Body>
    )
}