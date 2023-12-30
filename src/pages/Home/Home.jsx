import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import { useAuth } from "../../context/api";
import StyledComponent from "../../components/Banner/Head";
import DiscountBanner from "../../components/Banner/Banner";
import SearchComponent from "../../components/Banner/Search";
import ProductDetails from "../../components/Banner/ProductDetails";
import ProductItem from "../../components/ProductCard/Card";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    //get all cat
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("/api/v1/category/get-category");
        if (data?.success) {
          setCategories(data?.category);
          console.log(categories);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllCategory();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`/api/v1/product/all-products`);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <StyledComponent />
      <DiscountBanner />
      <SearchComponent />
      <ProductDetails />
      <GridContainer>
        {products?.map((p) => (
          <GridItem key={p._id}>
            <ProductItem
              name={p.name}
              price={p.price}
              description={p.description}
            />
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
};

const GridItem = styled.div`
  margin: 2rem;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-columns: max-content;
  width: 85%;
  margin: 0 auto;
  align-items: center;
`;
export default Home;
