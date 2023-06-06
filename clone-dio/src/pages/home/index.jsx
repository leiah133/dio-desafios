 // eslint-disable-next-line
import { Link } from "react-router-dom"
import { Button } from  "../../components/button"
import {Header} from '../../components/Header'
 import {Container, Title, TitleHighlight, TextContent } from './style'
 import Banner from '../../assets/banner.png'
 
 
 
 export const Home = () =>{
    return (  <>
        <Header />
       <Container>
        <div>
           <Title>
            <TitleHighlight>
            Implemente <br/>
            </TitleHighlight>
            O seu Futuro Global agora!
           </Title>
           <TextContent>
           Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
           </TextContent>
           <Link to="/login">
           <Button title='Começar agora' variant="secondary" onClick={( ) => null} />
           </Link>
        </div> 
        <div>
            <img src={Banner} alt="Banneer" />
        </div>
       </Container>
       
        </>
    )
}

