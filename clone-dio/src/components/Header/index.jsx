import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../button'
import {Container, Row, Wrapper, BuscarInputContainer, Menu, MenuRight, UserPicture ,Input} from './style'
import { Link } from 'react-router-dom'

export const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Link to='/home'>
                <img src={logo} alt="logo da Dio" />
                </Link>


                {autenticado  ?  (
                    <>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
                    
                    
                    </>
                ) :  null}
               
               
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/leiah133'/>
                ) : ( <> 
                
                <Link to='/home'>
                <MenuRight href='#'>Home</MenuRight>
                </Link>
                <Link to='/login'>
                <Button title ="Entrar"/>
                </Link>
                <Link to='/Cadastre'>
                <Button title ="Cadastrar"/>
                </Link>
                
                </>)}
            
                
            </Row>
        </Container>
    </Wrapper>
  )
}
