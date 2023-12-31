import styled from "styled-components";

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
  min-width: 5vw;

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
  position: relative;
  display: inline-block;
  gap: 9px;
  margin: 0 0 0 8vw;
  padding: 15px 49px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export {Wrapper,Image,Attribute,Container};
