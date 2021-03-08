import React from 'react';
import Feed from '../Feed';
import {
  Avatar, Banner,
  CakeIcon, Container,
  EditButton, Followage, LocationIcon, ProfileData
} from './styles';



const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Bruno Cesar</h1>
        <h2>@bruno_cesar</h2>

        <p>
          Developer at Home
        </p>

        <ul>
          <li>
            <LocationIcon />
            Taubaté, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de outubro de 1999
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>1000 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      
      <Feed />
    </Container>
  );
}

export default ProfilePage;