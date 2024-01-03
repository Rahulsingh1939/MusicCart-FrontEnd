import React,{useState,useEffect} from "react";
import Layout from "../../components/Layout/Layout";
import StyledComponent from "../../components/Banner/Head";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import OrderItemComp from "./OrderItem";
import { useCart } from "../../context/cart";
import OrderSummaryComp from "./OrderSummary";
import { useParams } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const {slug} = useParams();
  const [cart] = useCart();
  const [product,setProduct]=useState();
  
  let t = 0;
  cart.forEach((p) => {
    t += p.price;
  });
  
  useEffect(() => {
    if (slug) getProduct();
  }, [slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/product/${slug}`);
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  const total = product?(product.price):t;
  return (
    <>
      <Layout>
        <StyledComponent location="Checkout" />
        <Container
          onClick={() => {
            navigate("/cart");
          }}
        >
          <span>Back to Cart</span>
        </Container>
        <Title>Checkout</Title>

        <><div style={{display: "flex",
  flexDirection: "row",
  alignItems: "center",}}>
          <Wrapper>
            <div style={containerStyle}>
              <Header>Delivery Address</Header>
              <Address>
                Rahul Singh <br />
                Raipur , CG <br />
              </Address>
            </div>
            <Separator />
            <div style={containerStyle}>
              <Header>Payment Method</Header>
              <PaymentMethod>Pay on Delivery (Cash/Card)</PaymentMethod>
            </div>
            <Separator />
            <OrderDetails>
              <Column>
                <OrderSummary>Review items and delivery</OrderSummary>
              </Column>
              <Column>
                {!product && cart.map((p) => {
                  return <OrderItemComp key={p._id} p={p} />;
                })}
                {product && <OrderItemComp key={product._id} p={product}/>}
              </Column>
            </OrderDetails>
          </Wrapper>
          <OrderSummaryComp total={product? (product.price): (total)} direct={true}/></div>
        </>
      </Layout>
    </>
  );
};
const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  padding: 5%;
  margin: 5vh;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  color: #b52b00;
  font-weight: 500;
  font-size: 35px;
  width: 70%;
`;

const Address = styled.div`
  color: #797979;
  font-weight: 400;
  font-size: 29px;
  line-height: 43px;
  margin-top: 6px;
`;

const Separator = styled.div`
  background-color: #e1e1e1;
  height: 3px;
  margin-top: 48px;
`;

const PaymentMethod = styled.div`
  color: #797979;
  font-weight: 400;
  font-size: 29px;
  margin-top: 35px;
`;

const OrderDetails = styled.div`
  margin-top: 38px;
  display: flex;
  gap: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 54%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const OrderSummary = styled.div`
  color: #b52b00;
  font-weight: 500;
  font-size: 35px;
  margin-top: 8px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

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
const Title = styled.span`
  color: #000;
  flex-grow: 1;
  flex-grow: 1;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 700 2rem Roboto, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;
export default Checkout;
