import Footer from "../../components/Layout/Footer";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function OrderSuccess(props) {
    const navigate = useNavigate();
  return (
    <>
    <Header>
        <Logo
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
        <Title>MusicCart</Title>
      </Header>
      <Wrapper>
        <ConfirmationSection>
          <ConfirmationContainer>
            <ConfirmationImage
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/278d4935506ffea2ced76d4fc66521df79157cf4cfda179f3ba4bfeeefd012b1?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/278d4935506ffea2ced76d4fc66521df79157cf4cfda179f3ba4bfeeefd012b1?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/278d4935506ffea2ced76d4fc66521df79157cf4cfda179f3ba4bfeeefd012b1?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/278d4935506ffea2ced76d4fc66521df79157cf4cfda179f3ba4bfeeefd012b1?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/278d4935506ffea2ced76d4fc66521df79157cf4cfda179f3ba4bfeeefd012b1?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/278d4935506ffea2ced76d4fc66521df79157cf4cfda179f3ba4bfeeefd012b1?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/278d4935506ffea2ced76d4fc66521df79157cf4cfda179f3ba4bfeeefd012b1?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/278d4935506ffea2ced76d4fc66521df79157cf4cfda179f3ba4bfeeefd012b1?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
            />
            <ConfirmationTitle>Order is placed successfully!</ConfirmationTitle>
            <ConfirmationMessage>
              You will be receiving a confirmation email with order details
            </ConfirmationMessage>
            <HomeLink onClick={()=>{navigate('/')}}>Go back to Home page</HomeLink>
          </ConfirmationContainer>
        </ConfirmationSection>
      </Wrapper>
      <Footer />
    </>
  );
}
const Header = styled.div`
  display: flex;
  width:20%;
  padding-top:4vh;
    padding-left:5vw;
`;

const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 63px;
  overflow: hidden;
  max-width: 100%;
  cursor: pointer;
`;

const Title = styled.div`
  color: #2e0052;
  margin: auto 0;
  font: 600 44px Roboto, sans-serif;
`;
const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  padding:1.5%;
`;

const ConfirmationSection = styled.div`
  border-radius: 11px;
  border: 3px solid #e3e3e3;
  box-shadow: 14px 16px 23px 2px rgba(0, 0, 0, 0.11);
  background-color: #fff;
  display: flex;
  width: 60%;
  max-width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ConfirmationContainer = styled.div`
  display: flex;
  width: 30vw;
  max-width: 100%;
  flex-direction: column;
  margin: 5vw;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ConfirmationImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 8vw;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
`;

const ConfirmationTitle = styled.div`
  color: #000;
  align-self: center;
  margin-top: 51px;
  font: 600 2rem Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ConfirmationMessage = styled.div`
  color: #969696;
  align-self: stretch;
  margin-top: 20px;
  font: 500 2rem Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HomeLink = styled.div`
  color: #fff;
  white-space: nowrap;
  border-radius: 14px;
  background-color: #2e0052;
  align-self: center;
  margin-top: 64px;
  width: 547px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;
  font: 500 2rem Roboto, sans-serif;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(52, 152, 219, 1);
    color: #ffffff;
  }

  @media (max-width: 991px) {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export default OrderSuccess;
