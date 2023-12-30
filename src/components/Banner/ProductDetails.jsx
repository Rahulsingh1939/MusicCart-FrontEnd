import React from "react";
import styled from "styled-components";

function ProductDetails(props) {
  return (
    <>
    <Wrapper>
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/04c7ce2067c365edeb77e66c5ad5e80eb421186d9df2ef44f46466e88c67f18e?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
      />
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb255ad535b0e12aee5b0b0e9d9695f7b4d506d595e9884fbb5abb4faf6e78b?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
      />
      <Attribute>
        <Label>Headphone type</Label>
        <Icon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b83855cf41f5fb05ee5bf02397180ca226e09278222588e1a09e927b9d668116?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
      </Attribute>
      <Attribute>
        <Label>Company</Label>
        <Icon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a840494c71ac8dff21bcc3d09eb800317956b8e0cfc6948ffc583de95fdeeecc?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
      </Attribute>
      <Attribute>
        <Label>Colour</Label>
        <Icon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/174094dc8d7ec37ee3eb953a413b174f0cd029534a38bc54316106219ae0b5d5?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
      </Attribute>
      <Attribute>
        <Label>Price</Label>
        <Icon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/174094dc8d7ec37ee3eb953a413b174f0cd029534a38bc54316106219ae0b5d5?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
      </Attribute>
      <Container>
      <SortBy>Sort by: Featured</SortBy>
      <LazyImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/383823a5e7bc0492d7fa328d4915f608eba2f4a3caa70f602fb47c89557f1d4a?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
      />
    </Container>
    </Wrapper>

    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 5px;
  width: 82%;
  margin: 0 auto;
  margin-top: 4vh;
  @media (max-width: 991px) {
    max-width: 70%;
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.02;
  object-fit: contain;
  object-position: center;
  width: 49px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
  gap: 6px;
  padding: 15px 28px;
`;

const Attribute = styled.div`
  border-radius: 34.145px;
  background-color: #d9d9d9;
  align-self: start;
  display: flex;
  margin-top: 6px;
  gap: 6px;
  padding: 15px 28px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Label = styled.div`
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 23px Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1.6;
  object-fit: contain;
  object-position: center;
  width: 16px;
  fill: #000;
  overflow: hidden;
  align-self: start;
  margin-top: 8px;
  max-width: 100%;
`;
const Container = styled.div`
border-radius: 30.731px;
border: 3px solid #e1e1e1;
background-color: #fff;
align-self: start;
display: flex;
gap: 9px;
margin: 0 0 0 8vw;
padding: 15px 49px;

@media (max-width: 991px) {
padding: 0 20px;
}
`;

const SortBy = styled.div`
color: #000;
flex-grow: 1;
white-space: nowrap;
font: 400 22px Roboto, sans-serif;

@media (max-width: 991px) {
white-space: initial;
}
`;

const LazyImage = styled.img`
aspect-ratio: 1.6;
object-fit: contain;
object-position: center;
width: 16px;
fill: #000;
overflow: hidden;
align-self: start;
margin-top: 7px;
max-width: 100%;
`;


export default ProductDetails;
