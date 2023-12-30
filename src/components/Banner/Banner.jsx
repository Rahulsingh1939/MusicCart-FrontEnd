import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function DiscountBanner(props) {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <Title>
          Grab up to 50% off on <br /> selected headphones
        </Title>
        <Button type="button" onClick={() => navigate("/")}>
          Buy Now
        </Button>
      </Content>
      <Image
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9723fe1a3d3c3670c4cbb5510608231a54955e3e83533189f45fa8742e992?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9723fe1a3d3c3670c4cbb5510608231a54955e3e83533189f45fa8742e992?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9723fe1a3d3c3670c4cbb5510608231a54955e3e83533189f45fa8742e992?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9723fe1a3d3c3670c4cbb5510608231a54955e3e83533189f45fa8742e992?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9723fe1a3d3c3670c4cbb5510608231a54955e3e83533189f45fa8742e992?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9723fe1a3d3c3670c4cbb5510608231a54955e3e83533189f45fa8742e992?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9723fe1a3d3c3670c4cbb5510608231a54955e3e83533189f45fa8742e992?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2c9723fe1a3d3c3670c4cbb5510608231a54955e3e83533189f45fa8742e992?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
      />
    </Container>
  );
}

const Container = styled.div`
  border-radius: 29px;
  background: linear-gradient(90deg, #7286b4 0%, #e794ce 100%);
  align-self: center;
  display: flex;
  margin: auto;
  width: 82vw;
  height: 35vh;
  max-width: 100%;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 40px;
  }
`;

const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;

  margin: 1.5vw 3vw;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.div`
  color: #2e0052;
  font: 500 7vh Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const Button = styled.div`
  color: #fff;
  white-space: nowrap;
  border-radius: 30px;
  background-color: #2e0052;
  margin: 24px;
  width: 10vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 19px 60px;
  cursor: pointer;
  font: 400 27px Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.45;
  object-fit: contain;
  object-position: center;
  width: 35%;
  overflow: hidden;
  align-self: end;
  z-index: 1;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default DiscountBanner;
