import styled from "styled-components";

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

export  {SearchText,SearchIcon,SearchWrapper};
