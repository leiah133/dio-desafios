import React from 'react'
import { Link } from "react-router-dom"
import { Button } from  "../../components/button"
import {Header} from '../../components/Header'
import{Input} from '../../components/input'
import {Column,Container,Wrapper,TitleLogin,SubtitleLogin,Row,EsqueciText,CriarText,Title,Subtitle} from './style'

export const Cadastre = () => {
  return (<> 
    <Header />
   <Container>
    <Column>
       <Title>
        
       A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
       </Title>
    </Column> 
    <Column>
    <Wrapper>
        <TitleLogin>
        Comece agora grátis
        </TitleLogin>
        <SubtitleLogin>
        Crie sua conta e make the change._
                </SubtitleLogin>
        <form>
       <Input placeholder="Nome Completo" />
       <Input placeholder="Email" />
       <Input placeholder="Password" type='passowrd' />
       <Link to='/Feed'>
       <Button title='Criar Minha Conta' variant="secondary"/>
       </Link>
        </form>
        <Column>
        <Subtitle>
        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
        </Subtitle>
        </Column>
        <Row>
        <EsqueciText>Já tenho conta</EsqueciText>
        <CriarText>Fazer login</CriarText>
        </Row>
    </Wrapper>
    </Column>
   </Container>
   
    </>
)
    
  
}
