import React, { useState } from 'react';
import styled from 'styled-components';
import CircularIcons from './CircularIcons';

const CardContainer = styled.div`
  position: relative;
  width: 200px; /* Set desired width */
  height: 300px; /* Set desired height */
  perspective: 1000px; /* Enable 3D perspective */
  margin: 20px; /* Add margin to space out cards */
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  ${({ flipped }) => flipped && 'transform: rotateY(180deg);'}
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const CardFront = styled(CardSide)`
  background-image: url(${props => props.cover});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const CardBack = styled(CardSide)`
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  transform: rotateY(180deg); /* Rotate back side */
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2em; /* Adjust font size */
`;

const Author = styled.p`
  margin: 0;
  font-size: 1em; /* Adjust font size */
`;

const IconsContainer = styled.div`
  position: absolute;
  bottom: 10px; /* Adjust this value to fine-tune alignment */
  left: 0;
  right: 0; /* Stretch across */
  display: flex;
  justify-content: space-between;
  padding: 0 20px; /* Add padding for aesthetics */
  z-index: 10; /* Ensure icons are above the card */
`;

const BookCard = ({ cover, title, author, summary }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <CardContainer onClick={handleClick}>
      <Card flipped={flipped}>
        <CardFront cover={cover}>
          <Title>{title}</Title>
          <Author>{author}</Author>
        </CardFront>
        <CardBack>
          <p>{summary}</p>
        </CardBack>
      </Card>
      <IconsContainer>
        <CircularIcons />
      </IconsContainer>
    </CardContainer>
  );
};

export default BookCard;