import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function VerticalCard({p}) {
    const navigate=useNavigate();
    const handleDetails=()=>{
        navigate(`/product/${p.slug}`);
    }
  return (
    <Wrapper>
      <ImageContainer>
        <LazyImage loading="lazy" srcSet={p.photoUrl}/>
      </ImageContainer>
      <InfoContainer>
        <Title>{p.name}</Title>
        <Price>Price - ₹ {p.price}</Price>
        <Description>
          {p.color} | {p.category}
          <br />
          {p.description}
        </Description>
        <Button onClick={handleDetails}>Details</Button>
      </InfoContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height:35vh;
  max-width:80vw;
  margin: 3vh auto;
  border: 2px solid #ddd; 
  border-radius: 5px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const ImageContainer = styled.div`
  background-color: rgba(0, 102, 255, 0.17);
  display: flex;
  flex-direction: column;
  align-items: center;
  aspect-ratio: 0.8;
  width: 40%;
  margin-right:10%;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-left: 20px;
  }
`;

const LazyImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 90%;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: #000;
  align-self: stretch;
  font: 600 2rem Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Price = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 1rem;
  font: 500 25px Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 24px;
  font: 500 26px Roboto, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Button = styled.div`
  color: #fff;
  white-space: nowrap;
  border-radius: 26.121px;
  background-color: #2e0052;
  align-self: start;
  margin-top: 22px;
  justify-content: center;
  padding: 15px 39px;
  font: 400 25px Roboto, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

export default VerticalCard;