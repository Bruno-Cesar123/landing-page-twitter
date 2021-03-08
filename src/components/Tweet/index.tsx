import React from 'react';
import {
  Avatar, Body,
  CommentIcon, Container,
  Content,
  Description, Dot, Header,
  Icons, ImageContent,
  LikeIcon, Retweeted,
  RetweetIcon, RocketseatIcon,
  Status
} from './styles';


const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Bruno</strong>
            <span>@bruno cesar</span>
            <Dot />
            <time>03 de jan</time>
          </Header>

          <Description>Nunca pare de aprender </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;