import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dropdown from "../Banner/Dropdown";
import { useCart } from "../../context/cart";

function CartDetails({p}) {
  const [qty,setQty] = useState(1);
  const [cart,setCart] = useCart();
  useEffect(()=>{
    if(qty =="2") setCart([...cart,p]);//Not Correct Logic
    if(qty =="3") {setCart([...cart,p]);setCart([...cart,p])}//NOt Correct Logic
  },[qty])
  return (
    <Wrapper>
      <Image loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14193c8a63707d2633b2e5fc564d92a2eb3cbfe0df56cbd2b29aa600abed618d?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14193c8a63707d2633b2e5fc564d92a2eb3cbfe0df56cbd2b29aa600abed618d?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14193c8a63707d2633b2e5fc564d92a2eb3cbfe0df56cbd2b29aa600abed618d?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14193c8a63707d2633b2e5fc564d92a2eb3cbfe0df56cbd2b29aa600abed618d?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14193c8a63707d2633b2e5fc564d92a2eb3cbfe0df56cbd2b29aa600abed618d?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14193c8a63707d2633b2e5fc564d92a2eb3cbfe0df56cbd2b29aa600abed618d?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14193c8a63707d2633b2e5fc564d92a2eb3cbfe0df56cbd2b29aa600abed618d?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14193c8a63707d2633b2e5fc564d92a2eb3cbfe0df56cbd2b29aa600abed618d?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"/>
      <Content>
        <ProductName>{p.name}</ProductName>
        <ProductInfo>Color: {p.color}</ProductInfo>
        <ProductInfo>{p.stock ? "In Stock" : "Will Be Avilable Soon"}</ProductInfo>
      </Content>
      <Price>
        <Label>Price</Label>
        <Value>₹{p.price}</Value>
      </Price>
      <Quantity>
        <Label>Quantity</Label>
        <Value>{qty} <Dropdown options={["1","2","3"]} onChange={setQty}/></Value>
      </Quantity>
      <Total>
        <Label>Total</Label>
        <Value>₹{p.price*qty}</Value>
      </Total>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 4vw;
  margin-right: 0;
  align-items: flex-start;
  justify-content: space-between;
  padding:2%;
  gap: 20px;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.01;
  object-fit: contain;
  object-position: center;
  width: 289px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Content = styled.div`
  align-self: start;
  display: flex;
  margin-top: 10px;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProductName = styled.div`
  color: #000;
  font: 600 30px/124% Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProductInfo = styled.div`
  color: #a2a2a2;
  margin-top: 27px;
  font: 400 27px/124% Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Price = styled.div`
  align-self: start;
  display: flex;
  margin-top: 10px;
  flex-basis: 0%;
  flex-direction: column;
`;

const Label = styled.div`
  color: #000;
  font: 500 30px/124% Roboto, sans-serif;
`;

const Value = styled.div`
  color: #000;
  margin-top: 32px;
  font: 400 30px/124% Roboto, sans-serif;
`;

const Quantity = styled.div`
  align-self: start;
  display: flex;
  margin-top: 10px;
  flex-basis: 0%;
  flex-direction: column;
`;

const Total = styled.div`
  align-self: start;
  display: flex;
  margin-top: 9px;
  flex-basis: 0%;
  flex-direction: column;
`;

export default CartDetails;