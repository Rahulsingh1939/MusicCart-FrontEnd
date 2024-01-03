import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import SortBy from "../../components/Banner/SortBy";
import Dropdown from "../../components/Banner/Dropdown";

import { useAuth } from "../../context/api";
import { useCart } from "../../context/cart";

import {
  Wrapper,
  Image,
  Attribute,
  Container,
} from "../../components/Banner/ProductDetails";

import StyledComponent from "../../components/Banner/Head";
import DiscountBanner from "../../components/Banner/Banner";
import {
  SearchText,
  SearchIcon,
  SearchWrapper,
} from "../../components/Banner/Search";
import ProductItem from "../../components/ProductCard/Card";
import VerticalCard from "../../components/ProductCard/VerticalCard";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [view,setView]=useState(true);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const options = ["Neckbands", "Speakers", "Headphones"];
  const colors = ["Blue", "Black", "White"];
  const brands = ["Boat", "JBL", "Sony"];
  const priceRange = ["0 - 100", "100-200", ">200"];
  const [sortKey, setsortKey] = useState("");
  const sortBy = [
    "Price : Lowest",
    "Price : Highest",
    "Name : (A-Z)",
    "Name : (Z-A)",
  ];
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    //get all cat
    // const getAllCategory = async () => {
    //   try {
    //     const { data } = await axios.get("/api/v1/category/get-category");
    //     if (data?.success) {
    //       setCategories(data?.category);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    //getTOtal COunt
    const getTotal = async () => {
      try {
        const { data } = await axios.get("/api/v1/product/product-count");
        setTotal(data?.total);
      } catch (error) {
        console.log(error);
      }
    };
    getTotal();
    // getAllCategory();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(
          `/api/v1/product/product-list/${page}${sortKey&&`?sort=${sortKey}`}`
        );
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const getProductSorted = async () => {
    let sortKey="";
    if (sort) {
      if (sort == sortBy[0]) sortKey="price";
      else if (sort == sortBy[1]) sortKey="-price";
      else if (sort == sortBy[2]) sortKey="name";
      else if (sort == sortBy[3]) sortKey="-name";
    }
      try {
        const { data } = await axios.get(
          `/api/v1/product/product-list/${page}?sort=${sortKey}`
        );
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    if (sort) getProductSorted();
  }, [sort]);

  useEffect(() => {
    if (page === 1) return;
    if (!brand && !color && !category && !price) loadMore();
  }, [brand, color, category, page]);
  //load more
  const loadMore = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-list/${page}${sortKey&&`?sort=${sortKey}`}`
      );
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getFiltered = async () => {
      try {
        let args = {};
        if (category) args.category = category;
        if (brand) args.brand = brand;
        if (color) args.color = color;
        if (price) {
          if (price == "0 - 100") args.price = [0, 100];
          else if (price == "100-200") args.price = [100, 200];
          else if (price == ">200") args.price = [200];
        }
        const { data } = await axios.post(
          `/api/v1/product/filtered-products`,
          args
        );
        setProducts(data?.products);
      } catch (error) {
        console.log(error);
      }
    };
    if (brand || color || category || price) getFiltered();
  }, [brand, color, category, price]);

  useEffect(() => {}, [brand, color, price]);

  useEffect(() => {
    const searchProducts = async (searchKey) => {
      try {
        const { data } = await axios.get(`/api/v1/product/search/${searchKey}`);
        setProducts(data?.products);
        console.log(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    if (searchKey) searchProducts(searchKey);
  }, [searchKey]);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed. Performing function...");
      setSearchKey(keyword);
    }
  };

  return (
    <>
      <StyledComponent />
      <DiscountBanner />

      <SearchWrapper>
        <SearchIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35d1a11c68fd862bcfb5478784180d55ca9fda861af0f20129c18e7a9af30b2c?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
          loading="lazy"
        />
        <SearchText
          placeholder="Search Product"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleEnter}
        />
      </SearchWrapper>

      <Wrapper>
        {!view ? (<Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/04c7ce2067c365edeb77e66c5ad5e80eb421186d9df2ef44f46466e88c67f18e?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
          onClick={()=>{
            setView(true);
          }}
        />):
        (<Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cb255ad535b0e12aee5b0b0e9d9695f7b4d506d595e9884fbb5abb4faf6e78b?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
          onClick={()=>{
            setView(false);
          }}
        />)}
        <Attribute>
          <Dropdown
            options={options}
            onChange={setCategory}
            label={category ? category : "Headphone Type"}
          />
        </Attribute>
        <Attribute>
          <Dropdown
            options={brands}
            onChange={setBrand}
            label={brand ? brand : "Company"}
          />
        </Attribute>
        <Attribute>
          <Dropdown
            options={colors}
            onChange={setColor}
            label={color ? color : "Color"}
          />
        </Attribute>
        <Attribute>
          <Dropdown
            options={priceRange}
            onChange={setPrice}
            label={price ? price : "Price"}
          />
        </Attribute>
        <Container>
          <SortBy
            options={sortBy}
            onChange={setSort}
            label={sort ? sort : "Sort By"}
          />
        </Container>
      </Wrapper>

      {view ? (<GridContainer>
        {products?.map((p) => (
          <GridItem key={p._id}>
            <ProductItem
              name={p.name.substring(0, 15)}
              price={p.price}
              description={p.description.substring(0, 30)}
              photoUrl={p.photoUrl}
              id={p._id}
              slug={p.slug}
              p={p}
            />
          </GridItem>
          
        ))}
      </GridContainer>):(
        products?.map((p) => (
      <VerticalCard key={p._id} p={p}/>))
      )}
      <div>
        {products &&
          !brand &&
          !color &&
          !price &&
          !category &&
          !searchKey &&
          products.length < total && (
            <button
              id="loadMore"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              Load More...
            </button>
          )}
      </div>
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
