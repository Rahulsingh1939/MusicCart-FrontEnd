import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { useTotal } from "../../context/total";
import { useCart } from "../../context/cart";
import { useNavigate } from "react-router-dom";

function PriceDetailsComponent(props) {
  const [cart] = useCart();
  const navigate = useNavigate();
  let t = 0;
  cart.forEach((p) => {
    t += p.price;
  });
  const total = t;

  return (
    <Container>
      <Header>
        <Title>PRICE DETAILS</Title>
      </Header>
      <Content>
        <Item>
          <Label>Total MRP</Label>
          <Value>₹{total}</Value>
        </Item>
        <Item>
          <Label>Discount on MRP</Label>
          <Value>₹0</Value>
        </Item>
        <Item>
          <Label>Convenience Fee</Label>
          <Value>₹45</Value>
        </Item>
      </Content>
      <Footer>
        <TotalLabel>Total Amount</TotalLabel>
        <TotalValue>₹{total + 45}</TotalValue>
        <Button onClick={() => navigate("/checkout")}>PLACE ORDER</Button>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex;
  padding: 20px;
  margin-left: 10%;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  color: #000;
  width: 100%;
  font: 500 25px/124% Roboto, sans-serif;
`;

const Title = styled.div`
  color: #000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  color: #000;
  margin-top: 20px;
  width: 100%;
  font: 400 25px/124% Roboto, sans-serif;
`;

const Label = styled.span`
  color: #000;
  min-width: 6vw;
`;

const Value = styled.span`
  color: #000;
  white-space: nowrap;
  width: 20%;
  margin-left: 10%;
  align-self: flex-end;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalLabel = styled.div`
  color: #000;
  align-self: stretch;
  margin-top: 40px;
  width: 100%;
  font: 500 30px/104% Roboto, sans-serif;
`;

const TotalValue = styled.span`
  color: #000;
  white-space: nowrap;
  margin-top: -40px;
  margin-bottom: 2vh;
  font: 400 30px/132% Roboto, sans-serif;
  align-self: flex-end;
`;

const Button = styled.button`
  color: #000;
  letter-spacing: 0.54px;
  white-space: nowrap;
  border-radius: 11px;
  background-color: #ffd600;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px 60px;
  font: 500 27px Roboto, sans-serif;
  cursor: pointer;
`;

export default PriceDetailsComponent;
