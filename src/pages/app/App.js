import { useState, useEffect, useRef } from 'react';
import narutoImg from '../../images/naruto3.png'
import styled from 'styled-components';
import { Quotes } from '../../components';
import {getQuote} from '../../services';
import jutsoSound from '../../sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

export function App() {
  const isMounted = useRef(true);

    const [quoteState, setQuoteState ] = useState({ quote: 'Loading quote...', speaker:'Loading speaker...'});

    const onUpdate = async () => {
        const quote = await getQuote();

        if(isMounted.current){
            audio.play();
            setQuoteState(quote);
        }      
    };

    useEffect(() => {
        onUpdate();

        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <Content>
            <Quotes {...quoteState} onUpdate={onUpdate} />;
            <NarutoImg src={narutoImg} alt="Naruto pose de vitoria" />
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