import React from "react";
import styled from "styled-components";

function SearchComponent(props) {
  return (
    <SearchWrapper>
      <SearchIcon
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/35d1a11c68fd862bcfb5478784180d55ca9fda861af0f20129c18e7a9af30b2c?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        loading="lazy"
      />
      <SearchText placeholder="Search Product" />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  border-radius: 48px;
  border: 3px solid #c8c8c8;
  background-color: #fff;
  align-self: center;
  display: flex;
  margin: 3vh auto;
  width: 80vw;
  max-width: 100%;
  padding: 22px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const SearchIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 47px;
  overflow: hidden;
  max-width: 100%;
`;

const SearchText = styled.input`
  color: #666;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 34px Roboto, sans-serif;
  border: none;
  background: transparent;
  outline: 0;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default SearchComponent;
