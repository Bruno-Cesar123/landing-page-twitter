import React from 'react';

import { Container,
         Header, 
         BackIcon, 
         ProfileInfo, 
         BottomMenu, 
         HomeIcon, SearchIcon, BeilIcon, EmailIcon } from './styles';

import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Bruno Cesar</strong>
          <span>4567 Teweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage /> 

      <BottomMenu>
        <HomeIcon className='active' />
        <SearchIcon />
        <BeilIcon />
        <EmailIcon />
      </BottomMenu> 
    </Container>
  );
}

export default Main;