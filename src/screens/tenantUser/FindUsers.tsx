import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Body, Title, ButtonTouch, StyledText } from "../../styleds/home";


export default function FindUsers(){
    const authContext = useContext(AuthContext);

    const handlesignOut = () => {
        authContext?.signOut();

    }
    return (
        <Body>
            AQUI
        </Body>
    )
}