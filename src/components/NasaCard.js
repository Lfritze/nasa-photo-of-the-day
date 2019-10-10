import React from 'react';
import styled from 'styled-components';

// NOTE: We are not importing Nasa.js
// NOTE: We are passing props for title, explanation, hdurl

const NasaCardContainer = styled.div`
    max-width: 100%;    
    background: #b5e9e7;
    margin: 0 auto;
`;

const ExplanationParagraph = styled.p`
    max-width: 65%;
    margin: 0 auto;
    margin-bottom: 1%;
    margin-top: 2%;
    text-align: left;
`
const SpaceButton = styled.button`
    text-decoration: none;    
    width 150px;
    max-height: 150px;
    margin-bottom: 25px;
    background: orange;
    border-radius: 25px;
    border: 2px solid black;
    font-size: 1.2rem; 
`;

const DateNasa = styled.div`
    margin: 0 auto;    
    // margin-left: 12%;
    margin-bottom: 1%;
    border: 1px solid black;
    width: 20%;
    border-radius: 25px;
    background: #225d9e;
    color: white;
    height: 100%;
`

const PhotoOfDay = styled.img`
    max-width: 85%;
    border-radius: 40px;
`;

const NasaCard = props => {
    // const [state, setState] = useState();
    return (
        <NasaCardContainer className = "nasa-card">
            <h1>Nasa Photo of the day!</h1>
                <div className = 'space-content'>
                    <h2>{props.title}</h2>
                    
                        <DateNasa className="date">
                            <span>Date: {props.date}</span>
                        </DateNasa>
                </div>
            <div className = "image-container">
                <PhotoOfDay className= 'space-image' alt = 'Nasa Photo of The Day' src = {props.hdurl} />
                <ExplanationParagraph>{props.explanation}</ExplanationParagraph>
                <SpaceButton className = 'space-button'> 
                    <a href = "https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">Read More
                    </a>
                </SpaceButton>
            </div>
        </NasaCardContainer>
    )
}

export default NasaCard;