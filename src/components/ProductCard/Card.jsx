import React from "react";
import styled from "styled-components";
import { useAuth } from "../../context/api";
import { useCart } from "../../context/cart";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProductItem({ name, price, description, photoUrl,id,slug,p }) {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [isCartVisible, setIsCartVisible] = React.useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setIsCartVisible(true);
  };
  const handleImgClick = () => {
    navigate(`product/${slug}`)
  }
  return (
    <Wrapper >
      <ImageWrapper>
        <LazyImage
          loading="lazy"
          srcSet={photoUrl}
          onClick={handleImgClick}
        />
        {auth.user && (
          <StyledImg
            loading="lazy"
            onClick={()=>{
              setCart([...cart, p]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...cart, p])
              );
              toast.success("Item Added to cart");
            }}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d499dad26aa42de99e77541483faeedbbdc31358dd7032bacf84aba3b52e6a97?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
          />
        )}
      </ImageWrapper>
      <ContentWrapper>
        <ProductName>{name}</ProductName>
        <Price>Price - ₹ {price}</Price>
        <Description>{description}</Description>
      </ContentWrapper>
    </Wrapper>
  );
}
const LazyImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 80%;
  transition: transform 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    background-color: lightgrey;
    opacity: 0.8;
    cursor: pointer;
    ${LazyImage} {
      transform: scale(1.2);
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  padding: 38px 20px 12px 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 22px;
  flex-direction: column;
  padding: 0 26px;
`;

const ProductName = styled.div`
  color: #000;
  font: 500 2rem Roboto, sans-serif;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.div`
  color: #000;
  margin-top: 22px;
  font: 450 1.6rem Roboto, sans-serif;
`;

const Description = styled.div`
  color: #000;
  margin-top: 21px;
  white-space: nowrap;
  font: 400 1.2rem Roboto, sans-serif;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
`;

const StyledImg = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 15%;
  padding-left: 60%;
`;
export default ProductItem;
