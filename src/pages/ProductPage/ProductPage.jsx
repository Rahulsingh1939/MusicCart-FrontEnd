import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import StyledComponent from "../../components/Banner/Head";
import ProDetails from "./ProD";
import Layout from "../../components/Layout/Layout";

const ProductPage = () => {
  const [product, setProduct] = useState("");
  const { slug } = useParams();
  const navigate = useNavigate();

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
  return (
    <>
      <Layout>
        <StyledComponent location={product.name}/>
        <Container
          onClick={() => {
            navigate("/");
          }}
        >
          <span>Back to products</span>
        </Container>
        <Wrapper>
          <Content>{product.description}</Content>
        </Wrapper>
        <div style={containerStyle}>
          <ImageElement loading="lazy" srcSet={product.photoUrl} />
          <ProDetails product={product} />
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 40%;
  margin-top: 5vh;

  margin-left: 5%;
  font: 600 34px/42px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Content = styled.div`
  text-align: center;
`;

const ImageElement = styled.img`
  aspect-ratio: 1.05;
  object-fit: contain;
  object-position: center;
  width: 50%;
  height: 40%;
  margin: 5vw;
  overflow: hidden;
  border: 1px solid;
  border-radius: 10px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StyledImag = styled.img`
  aspect-ratio: 1.23;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  margin-top: 34px;

  @media (max-width: 991px) {
    margin-top: 34px;
  }
`;
const containerStyle = {
  display: "flex",
};
export default ProductPage;
