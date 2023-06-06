
import { Link } from "react-router-dom"
import { Button } from  "../../components/button"
import {Header} from '../../components/Header'
import{Input} from '../../components/input'
import {Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, EsqueciText, CriarText} from './style'

 
 
 export const Login= () =>{
    return (  <> 
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
               Faça seu cadastro
            </TitleLogin>
            <SubtitleLogin>
            Faça seu login e make the change._          
            </SubtitleLogin>
            <form>
           <Input placeholder="Email" />
           <Input placeholder="Senha" />
           <Link to='/Feed'>
           <Button title='Entrar' variant="secondary"/>
           </Link>
            </form>
            <Row>
               <EsqueciText>Esqueci minha senha</EsqueciText>
               <CriarText>Crie sua conta</CriarText>
            </Row>
        </Wrapper>
        </Column>
       </Container>
       
        </>
    )
}

