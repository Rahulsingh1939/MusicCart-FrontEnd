import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/api";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const StyledComponent = ({ location }) => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Logo
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15468f3ce0b845613e53039ae081050a0e7a68044011081ed998281f490a7ef6?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
        <Title>MusiCart</Title>
        <Subtitle>
          <span onClick={() => navigate("/")}>Home</span>  &nbsp;{location && (`/ ${location}`)}{" "}
        </Subtitle>
      </Header>
      {auth.user && !(location=="Cart" || location=="Checkout") && (
        <Cart type="button" onClick={() => navigate("/cart")}>
          <CartImage
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bd8993dc9523f98840a8d36624f7a4a6aba09735b3370e7c7716542814ed02e?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
          />
          <CartText>
            <Badge count={cart?.length} showZero offset={[10, -5]}>
              View Cart
            </Badge>
          </CartText>
        </Cart>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 7vw;
  margin: 5vh;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin: 40px 10px 0 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
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

const Subtitle = styled.div`
  color: #000;
  align-self: center;
  white-space: nowrap;
  margin: auto 2vw;
  font: 600 28px Roboto, sans-serif;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Cart = styled.div`
  border-radius: 47px;
  background-color: #1d7000;
  align-self: start;
  display: flex;
  margin-top: 11px;
  gap: 6px;
  cursor: pointer;
  padding: 13px 32px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const CartImage = styled.img`
  aspect-ratio: 0.96;
  object-fit: contain;
  object-position: center;
  width: 26px;
  fill: #fff;
  overflow: hidden;
  max-width: 100%;
`;

const CartText = styled.div`
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 22px Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default StyledComponent;
