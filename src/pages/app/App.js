import narutoImg from '../../images/naruto.png'
import styled from 'styled-components';

export function App() {
    return (
        <Content>
            <p>Frase</p>
            <button>Proxima</button>
            <img src={narutoImg} alt="Naruto pode de vitoria" />
        </Content>
    );
}

const Content = styled.div`
heught: 100vh;
padding:0 50px;
display: flex;
justify-content: center;
align-items: center;
`;

const NarutoImg = styled.img`
max-width: 50vw;
align-self: flex-end;
`;