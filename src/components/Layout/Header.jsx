import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/api';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth,setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user:null,
      token:""
    });
    localStorage.removeItem("auth");
    toast.success("Logged Out Successfully");
  }
  return (
    <div>
      <Container>
      <Logo>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0397487b9bbfe939f9e8b02d70dfc200d14ac2218519bb4286e764c40fc330c8?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"
          alt="Logo"
        />
        <Title>912121131313</Title>
      </Logo>
      <Promotion>
        <Subtitle>Get 50% off on selected items</Subtitle>
        <Line />
        <Button>Shop Now</Button>
      </Promotion>
      {
        !auth.user ? (
          <Auth>
            <Button><a href='/signin'>Login</a></Button>
            <Line />
            <Button><a href='/register'>Signup</a></Button>
          </Auth>) : (
      <Auth>
        <Button><a onClick={handleLogout} href='/signin'>Logout</a></Button>
      </Auth>)
      }
    </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
  background-color: #2e0052;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 40px 15px 48px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

const Title = styled.div`
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 18px Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Promotion = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
`;

const Subtitle = styled.div`
  color: #fff;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 18px Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Line = styled.div`
  background-color: #fff;
  align-self: stretch;
  width: 2px;
  height: 27px;
`;

const Button = styled.div`
  color: #fff;
  align-self: start;
  margin-top: 7px;
  white-space: nowrap;
  font: 500 18px Roboto, sans-serif;
  

  @media (max-width: 991px) {
    white-space: initial;
  }
  
a {
  color: inherit;
  text-decoration: inherit;
}
`;

const Auth = styled.div`
  align-self: start;
  display: flex;
  margin-top: 6px;
  align-items: start;
  gap: 14px;
`;

const AuthButton = styled.div`
  color: #fff;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 25px Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const AuthLine = styled.div`
  background-color: #fff;
  width: 2px;
  height: 20px;
`;
