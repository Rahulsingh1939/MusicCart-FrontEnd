import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import SortBy from "./SortBy";

function ProductDetails(props) {
  const options = ['Option 1', 'Option 2', 'Option 3'];
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
        <Dropdown options={options} label='Headphone Type'/>
      </Attribute>
      <Attribute>
      <Dropdown options={options} label='Company'/>
      </Attribute>
      <Attribute>
      <Dropdown options={options} label='Color'/>
      </Attribute>
      <Attribute>
      <Dropdown options={options} label='Price'/>
      </Attribute>
      <Container>
      <SortBy options={options} label='Sort By'/>
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
  min-width:5vw;

  position: relative;
  display: inline-block;
  margin-top: 6px;
  padding: 10px 34px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
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

export default ProductDetails;
