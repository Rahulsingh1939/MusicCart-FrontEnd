import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import StyledComponent from "../../components/Banner/Head";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CartDetails from "../../components/CartDetails/CartDetails";
import BillDetails from "../../components/TotalBill/TotalBillComp";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/api";
// import { useTotal } from "../../context/total";


const CartPage = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  return (
    <>
      <Layout>
        <StyledComponent location="Cart" />
        <Container
          onClick={() => {
            navigate("/");
          }}
        >
          <span>Back to products</span>
        </Container>
        <CartLogo>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a9c56f36d69faf7762fb247a7245d88e1349cf9de003a2f30d742452d5c1741?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
          />
          <Title>My Cart</Title>
        </CartLogo>
        <div style={{ display: "flex" }}>
          <div style={{ width: "60%" }}>
            {cart?.map((p) => {
              return <CartDetails key={p._id} p={p} />;
            })}
          </div>
          <div style={{ width: "30%" }}>
            {cart.length ? <BillDetails />:"Cart is"}
          </div>
        </div>
      </Layout>
    </>
  );
};
const Container = styled.button`
  color: #fff;
  white-space: nowrap;
  border-radius: 12px;
  background-color: #2e0052;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vw;
  height: 5vh;
  margin-left: 10vw;
  font: 500 100% Roboto, sans-serif;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    margin: 40px 0 0 10px;
    padding: 0 20px;
  }
`;
const CartLogo = styled.div`
  display: flex;
  margin: 3%;

  gap: 20px;
  height: 4vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.03;
  object-fit: contain;
  object-position: center;
  width: 3vw;
  fill: #000;
  margin-left: 42vw;
  overflow: hidden;
  max-width: 100%;
`;

const Title = styled.span`
  color: #000;
  margin-top: 21px;
  flex-grow: 1;
  white-space: nowrap;
  font: 700 40px Roboto, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
export default CartPage;
