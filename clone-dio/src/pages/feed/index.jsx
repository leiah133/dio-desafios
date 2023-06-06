import React from 'react'
import { Card } from '../../components/card'
// import { Button } from '../../components/button'
import { UserInfo } from '../../components/userInfo'
import { Header } from '../../components/Header'
import { Container, Column, Title, TitleHighlight } from './style'



export const Feed = () => {
  return (<>
    <Header  autenticado={true}/>
    <Container>
      <Column flex={3}>
      <Title>Feed</Title>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </Column>
      <Column flex={1}>
      <TitleHighlight># Ranking 5 Top da Semana</TitleHighlight>
      <UserInfo percentual={35}nome="Léia Oliver" image='https://avatars.githubusercontent.com/leiah133' />
      <UserInfo percentual={58}nome="Léia Oliver" image='https://avatars.githubusercontent.com/leiah133' />
      <UserInfo percentual={80}nome="Léia Oliver" image='https://avatars.githubusercontent.com/leiah133' />
      <UserInfo percentual={10}nome="Léia Oliver" image='https://avatars.githubusercontent.com/leiah133' />
      <UserInfo percentual={98}nome="Léia Oliver" image='https://avatars.githubusercontent.com/leiah133' />
      
      </Column>
    </Container>
 </> )
}
