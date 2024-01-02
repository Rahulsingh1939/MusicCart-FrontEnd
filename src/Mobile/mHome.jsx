import React from "react";
import styled from "styled-components";

function LoginPage(props) {
  return (
    <Container>
      <Header>
        <Logo srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56fd0fcd83f051c14516b454bfcaaacafe596d99609d7e708cc4f3e91b48f856?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56fd0fcd83f051c14516b454bfcaaacafe596d99609d7e708cc4f3e91b48f856?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56fd0fcd83f051c14516b454bfcaaacafe596d99609d7e708cc4f3e91b48f856?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56fd0fcd83f051c14516b454bfcaaacafe596d99609d7e708cc4f3e91b48f856?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56fd0fcd83f051c14516b454bfcaaacafe596d99609d7e708cc4f3e91b48f856?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56fd0fcd83f051c14516b454bfcaaacafe596d99609d7e708cc4f3e91b48f856?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56fd0fcd83f051c14516b454bfcaaacafe596d99609d7e708cc4f3e91b48f856?apiKey=c41df0b048fb4bad873f2d9b07bfce38&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56fd0fcd83f051c14516b454bfcaaacafe596d99609d7e708cc4f3e91b48f856?apiKey=c41df0b048fb4bad873f2d9b07bfce38&"alt="Musicart Logo" />
        <Title>Musicart</Title>
      </Header>
      <Content>
        <Welcome>Welcome</Welcome>
        <LoginForm>
          <FormGroup>
            <Label>Sign in.</Label>
            <SubLabel>Already a customer?</SubLabel>
          </FormGroup>
          <FormGroup>
            <InputLabel>Enter your email or mobile number</InputLabel>
            <InputField type="text" />
          </FormGroup>
          <FormGroup>
            <InputLabel>Password</InputLabel>
            <InputField type="password" />
          </FormGroup>
          <Button>Continue</Button>
          <PrivacyNotice>
            By continuing, you agree to Musicart privacy notice and conditions
            of use.
          </PrivacyNotice>
        </LoginForm>
        <Separator />
        <SignUpSection>
          <SeparatorLine />
          <SignUpLabel>New to Musicart?</SignUpLabel>
          <SeparatorLine />
        </SignUpSection>
        <SignUpButton>Create your Musicart account</SignUpButton>
      </Content>
      <Footer>Musicart | All rights reserved</Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  max-width: 360px;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #2e0052;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  padding: 8px 19px;
`;

const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  overflow: hidden;
  max-width: 100%;
`;

const Title = styled.div`
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 19px Roboto, sans-serif;
`;

const Content = styled.div`
  display: flex;
  margin-top: 38px;
  width: 100%;
  flex-direction: column;
  padding: 0 18px;
`;

const Welcome = styled.div`
  color: #2e0052;
  font: 400 31px Roboto, sans-serif;
`;

const LoginForm = styled.div`
  border-radius: 5px;
  border: 2px solid #d0d0d0;
  background-color: #fff;
  display: flex;
  margin-top: 27px;
  width: 100%;
  flex-direction: column;
  padding: 17px 16px 35px;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7px;
`;

const Label = styled.div`
  color: #000;
  font: 500 16px Roboto, sans-serif;
`;

const SubLabel = styled.div`
  color: #000;
  font: 300 13px Roboto, sans-serif;
`;

const InputLabel = styled.div`
  color: #000;
  margin-top: 21px;
  font: 500 13px Roboto, sans-serif;
`;

const InputField = styled.input`
  border-radius: 4.856px;
  border: 1.214px solid #b6b6b6;
  background-color: #fff;
  display: flex;
  margin-top: 8px;
  width: 288px;
  max-width: 100%;
  height: 35px;
  flex-direction: column;
`;

const Button = styled.div`
  color: #fff;
  white-space: nowrap;
  border-radius: 4.856px;
  background-color: #2e0052;
  margin-top: 18px;
  justify-content: center;
  align-items: center;
  padding: 14px 60px;
  font: 500 16px Roboto, sans-serif;
`;

const PrivacyNotice = styled.div`
  color: #000;
  margin-top: 20px;
  font: 400 11px/16px Roboto, sans-serif;
`;

const Separator = styled.div`
  background-color: #bdbdbd;
  align-self: center;
  width: 97px;
  height: 1px;
  margin: auto 0;
`;

const SignUpSection = styled.div`
  display: flex;
  margin-top: 25px;
  padding-right: 5px;
  justify-content: space-between;
  gap: 14px;
`;

const SeparatorLine = styled.div`
  background-color: #bdbdbd;
  align-self: center;
  width: 97px;
  height: 1px;
  margin: auto 0;
`;

const SignUpLabel = styled.div`
  color: #000;
  font: 400 11px/116% Roboto, sans-serif;
`;

const SignUpButton = styled.div`
  color: #000;
  text-align: center;
  white-space: nowrap;
  border-radius: 6px;
  border: 2px solid #bdbdbd;
  background-color: #fff;
  margin-top: 26px;
  justify-content: center;
  padding: 14px 60px;
  font: 400 15px/173% Roboto, sans-serif;
`;

const Footer = styled.div`
  color: #fff;
  white-space: nowrap;
  background-color: #2e0052;
  margin-top: 196px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 19px 60px;
  font: 500 14px Roboto, sans-serif;
`;

export default LoginPage;