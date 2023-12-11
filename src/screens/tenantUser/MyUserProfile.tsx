import React, { useContext } from 'react';
import { Container, ProfileImage, Name, Gender, City, AboutMe } from '../../styleds/AnotherUserProfille';
import { ButtonTouch, StyledText, Title } from '../../styleds/home';
import { AuthContext } from '../../context/AuthContext';
import { navigate } from '../../routes/RootNavigation';

export interface propsUserProfille {
    photo: string;
    name: string;
    gender: string;
    city: string;
    aboutMe: string
}

export function MyUserProfille() {

    const authContext = useContext(AuthContext)
    const myProfile = {
        photo: authContext?.user?.photo,
        name: authContext?.user?.name,
        gender: authContext?.user?.gender,
        city: authContext?.user?.city,
        aboutMe: authContext?.user?.aboutMe
    }
    const { photo, name, gender, city, aboutMe } = myProfile;

    function handleEditar(){
        navigate('EditMyProfile', {})
    }

    return (
        <>
            <Title>Meu Perfil</Title>
            <Container>
                <ProfileImage source={{ uri: photo }} />
                <Name>{name}</Name>
                <Gender>{gender}</Gender>
                <City>{city}</City>
                <AboutMe>{aboutMe}</AboutMe>
                <ButtonTouch onPress={handleEditar} ><StyledText>Editar</StyledText></ButtonTouch>

            </Container>
        </>

    )
}
