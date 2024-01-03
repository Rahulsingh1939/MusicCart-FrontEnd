import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../context/cart";

function OrderSummaryComp({total,direct}) {
  const [cart,setCart] = useCart();
  const navigate=useNavigate();
  const handleOrder = ()=>{
    if(!direct) localStorage.removeItem('cart');
    if(!direct) setCart([]);
    navigate('/order-success');
  }
  return (
    <Wrapper>
      <Header onClick={handleOrder}>Place your order</Header>
      <Content>
        By placing your order, you agree to Musicart privacy <br /> notice and conditions of use.
      </Content>
      <Separator />
      <Section>
        <Subsection>
          <Label>Items :</Label>
          <Label>Delivery :</Label>
        </Subsection>
        <Values>
          <Value>₹{total}</Value>
          <Value>₹45.00</Value>
        </Values>
      </Section>
      <Separator />
      <Section>
        <Label>Total :</Label>
        <TotalValue>₹{total+45}</TotalValue>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 16px;
  border: 4px solid #e1e1e1;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  width: 30%;
  padding: 21px 17px 50px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Header = styled.button`
  color: #000;
  text-align: center;
  white-space: nowrap;
  border-radius: 13.333px;
  background-color: #ffd600;
  align-self: stretch;
  padding: 20px 60px;
  font: 400 31px Roboto, sans-serif;
  cursor:pointer;
  @media (max-width: 991px) {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Content = styled.div`
  color: #000;
  text-align: center;
  max-width: 402px;
  align-self: center;
  margin-top: 29px;
  font: 400 18px/26px Roboto, sans-serif;
`;

const Separator = styled.div`
  background-color: #e1e1e1;
  align-self: stretch;
  margin-top: 21px;
  height: 3px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Section = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Subsection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: #797979;
  white-space: nowrap;
  font: 400 27px/124% Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
`;

const Value = styled.div`
  color: #797979;
  white-space: nowrap;
  font: 400 27px/124% Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const TotalValue = styled.div`
  color: #b52b00;
  font: 500 32px/105% Roboto, sans-serif;
`;

export default OrderSummaryComp;