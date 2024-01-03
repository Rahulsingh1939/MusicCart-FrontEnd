import React from "react";
import styled from "styled-components";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProDetails({ product }) {
  const [cart,setCart] = useCart();
  const [auth] = useAuth();
  const navigate=useNavigate();
  const handleCart = ()=>{
    if(auth.user){
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      toast.success("Item Added to cart")
    }
    else{
      navigate('/signin');
    }
  }
  const { About } = product;

  const handleDirect= ()=>{
    navigate(`/checkout-direct/${product.slug}`)
  }
  return (
    <Container>
      <ProductName>{product.name}</ProductName>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/846dc606f07a01ec03460e987abbfd3bb01162bb400f7eae5ca1340d903048c2?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/846dc606f07a01ec03460e987abbfd3bb01162bb400f7eae5ca1340d903048c2?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/846dc606f07a01ec03460e987abbfd3bb01162bb400f7eae5ca1340d903048c2?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/846dc606f07a01ec03460e987abbfd3bb01162bb400f7eae5ca1340d903048c2?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/846dc606f07a01ec03460e987abbfd3bb01162bb400f7eae5ca1340d903048c2?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
        />
      </ImageContainer>
      <Reviews>(50 Customer reviews)</Reviews>
      <Price>Price - ₹ {product.price}</Price>
      <Description>
        {console.log(About)}
        {product.color} | {product.category}
        <br />
        {About &&
          About.map((item, index) => {
            return (
              <p key={index}>
                <br />
                {item}
              </p>
            );
          })}
        <br />
        High sound quality and well-balanced sound tuning
      </Description>
      <Availability>
        Available - {product.stock ? "In stock" : "Sorry Out Of Stock "}
      </Availability>
      <Brand>Brand - {product.brand}</Brand>
      <AddToCart
        onClick={handleCart}
      >
        Add to cart
      </AddToCart>
      <BuyNow onClick={handleDirect}>Buy Now</BuyNow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  margin: 5vw;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ProductName = styled.div`
  color: #000;
  font: 600 52px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin-top: 22px;
  width: 30%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const LazyImage = styled.img`
  aspect-ratio: 0.94;
  object-fit: contain;
  object-position: center;
  width: 33px;
  fill: #ffd600;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Reviews = styled.div`
  color: #000;
  align-self: start;
  margin-top: 5px;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 29px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Price = styled.div`
  color: #000;
  margin-top: 33px;
  font: 500 34px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.div`
  color: #000;
  margin-top: 23px;
  font: 400 34px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Availability = styled.div`
  color: #000;
  margin-top: 28px;
  font: 500 34px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Brand = styled.div`
  color: #000;
  margin-top: 28px;
  font: 500 34px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AddToCart = styled.button`
  color: #000;
  border-radius: 40px;
  background-color: #ffd600;
  margin-top: 42px;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;
  font: 400 33px Roboto, sans-serif;
  cursor: pointer;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const BuyNow = styled.button`
  color: #000;
  border-radius: 40px;
  background-color: #ffb800;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 17px 60px;
  font: 400 33px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export default ProDetails;
